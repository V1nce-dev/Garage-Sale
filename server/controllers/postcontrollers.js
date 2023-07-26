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

const getImageById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post || !post.image) {
            return res.status(404).json({ message: "Image not found" });
        }

        if (req.user._id.toString() !== post.creator.toString()) {
            return res.status(403).json({ message: "You do not have permission to view this image" });
        }

        res.contentType(post.image.contentType);
        res.send(post.image.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (req.user._id.toString() !== post.creator.toString()) {
            return res.status(403).json({ message: "You do not have permission to view this post" });
        }

        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
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

const post = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const creator = req.user._id;
        const image = {
            data: fs.readFileSync(req.file.path),
            contentType: req.file.mimetype,
        };

        if (!name || !price) {
            return res.status(400).json({ message: "Name and Price are required" });
        }

        const post = new Post({ name, price, description, image, creator });
        await post.save();

        return res.status(200).json({
            message: "Your Product is now listed",
            id: post._id,
            name: name,
            price: price,
            description: description,
            image: image,
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

        await Post.findByIdAndDelete(req.params.id);

        return res.status(200).json({ message: "Post has been deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Can not delete" });
    }
};

module.exports = {
    upload,
    getImageById,
    getPostsByUser,
    getPostById,
    post,
    deletePostById,
};