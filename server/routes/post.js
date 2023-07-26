const express = require("express");
const router = express.Router();
const {
    getImageById,
    upload,
    post,
    getPostsByUser,
    getPostById,
    deletePostById,
} = require("../controllers/postcontrollers");
const Verify = require("../middleware/auth")

router.use(Verify)

router.get("/image/:id", getImageById);
router.get("/post/:id", getPostById);
router.get("/posts", getPostsByUser);
router.post("/post", upload.single("image"), post);
router.delete("/post/:id", deletePostById);

module.exports = router;
