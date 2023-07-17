const Post = require("../model/postmodel");

const post = async (req, res) => {
    try {
        const { name, price, description, image } = req.body;

        if (!name || !price) {
            return res.status(500).json({ message: "Name and Price are required" });
        }

        const post = new Post({ name, price, description, image });
        await post.save();

        return res
            .status(200)
            .json({
                message: "Your Product is now listed",
                name: name,
                price: price,
                description: description,
            });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "There has been an error", error: error.message });
    }
};

module.exports = {
    post,
};