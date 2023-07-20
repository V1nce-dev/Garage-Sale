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
            name: name,
            price: price,
            description: description,
            image: image,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "There has been an error" });
    }
};

module.exports = {
    upload,
    post,
};
