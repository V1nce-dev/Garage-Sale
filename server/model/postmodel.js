const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 300,
    },
    image: {
        data: {
            type: Buffer,
            validate: {
                validator: (value) => {
                    return value.length <= 5242880; // 5MB
                },
                message: "Image file size exceeds the allowed limit.",
            },
        },
        contentType: String,
    },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
