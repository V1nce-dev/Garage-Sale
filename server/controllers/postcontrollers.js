const fs = require("fs");
const Post = require("../model/postmodel");
const multer = require("multer");

const dir = "./uploads";
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

const getPostById = async (req, res) => {
    try {
        if (!req.headers.authorization) {
            return res
                .status(401)
                .json({ message: "No authorization header provided." });
        }

        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (req.headers.accept === "image/*") {
            if (!post.imagePath) {
                return res.status(404).json({ message: "Image not found" });
            }
            return res.sendFile(path.resolve(post.imagePath));
        }

        if (req.user._id.toString() !== post.creator.toString()) {
            return res
                .status(403)
                .json({ message: "You do not have permission to view this post" });
        }

        res.json(post);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "There has been an error", error: error.message });
    }
};

const getPostsByUser = async (req, res) => {
    try {
        const userId = req.user._id;
        const posts = await Post.find({ creator: userId });
        if (!posts) {
            return res.status(404).json({ message: "No posts found" });
        }
        return res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        if (!posts) {
            return res.status(404).json({ message: "No posts found" });
        }
        return res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "Server error", error: error.message });
    }
};

const post = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const creator = req.user._id;
        const imagePath = req.file.path;

        if (!name || !price) {
            return res.status(400).json({ message: "Name and Price are required" });
        }

        const post = new Post({ name, price, description, imagePath, creator });
        await post.save();

        return res.status(200).json({
            message: "Your Product is now listed",
            id: post._id,
            name: name,
            price: price,
            description: description,
            imagePath: imagePath,
            creator: creator,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "There has been an error" });
    }
};

const deletePostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        console.log(`User ID: ${req.user._id}`);
        console.log(`Post's Creator: ${post.creator}`);

        if (req.user._id.toString() !== post.creator.toString()) {
            return res
                .status(403)
                .json({ message: "You do not have permission to delete this post" });
        }

        fs.unlinkSync(post.imagePath);

        await Post.findByIdAndDelete(req.params.id);

        return res.status(200).json({ message: "Post has been deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Can not delete" });
    }
};

module.exports = {
    upload,
    getPostsByUser,
    getPostById,
    getAllPosts,
    post,
    deletePostById,
};
