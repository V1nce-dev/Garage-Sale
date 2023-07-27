const express = require("express");
const router = express.Router();
const {
    getImageById,
    upload,
    post,
    getPostsByUser,
    getPostById,
    getAllPosts,
    deletePostById,
} = require("../controllers/postcontrollers");
const Verify = require("../middleware/auth")

router.get("/products/post/", getAllPosts)
router.get("/image/:id", Verify, getImageById);
router.get("/post/:id", Verify, getPostById);
router.get("/post", Verify, getPostsByUser);
router.post("/post", Verify, upload.single("image"), post);
router.delete("/post/:id", Verify, deletePostById);

module.exports = router;
