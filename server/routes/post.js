const express = require("express");
const router = express.Router();
const {
    getImageById,
    upload,
    post,
    getPostById,
    deletePostById,
} = require("../controllers/postcontrollers");

router.get("/image/:id", getImageById);
router.post("/post", upload.single("image"), post);
router.get("/post/:id", getPostById);
router.delete("/post/:id", deletePostById);

module.exports = router;
