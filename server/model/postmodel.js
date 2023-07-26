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
        data: Buffer,
        contentType: String,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
