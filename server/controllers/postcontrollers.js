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
        res.contentType(post.image.contentType);
        res.send(post.image.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const post = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const image = {
            data: fs.readFileSync(req.file.path),
            contentType: req.file.mimetype,
        };

        if (!name || !price) {
            return res.status(500).json({ message: "Name and Price are required" });
        }

        const post = new Post({ name, price, description, image });
        await post.save();

        return res.status(200).json({
            message: "Your Product is now listed",
            id: post._id,
            name: name,
            price: price,
            description: description,
            image: image,
        });
    } catch (error) {
        return res.status(500).json({ message: "There has been an error" });
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const deletePostById = async (req, res) => {
    try {
        const post = await Post.deleteMany(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json({ message: "Post has been deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Can not delete" });
    }
};

module.exports = {
    upload,
    getImageById,
    post,
    getPostById,
    deletePostById,
};
