const express = require("express");
const router = express.Router();
const {
  upload,
  post,
  getPostsByUser,
  getPostById,
  getAllPosts,
  getPublicPosts,
  deletePostById,
} = require("../controllers/postcontrollers");
const Verify = require("../middleware/auth");

router.get("/products/post/", getAllPosts);
router.get("/products/post/:id", getPublicPosts);
router.get("/post/:id", Verify, getPostById);
router.get("/post", Verify, getPostsByUser);
router.post("/post", Verify, upload.single("image"), post);
router.delete("/post/:id", Verify, deletePostById);

module.exports = router;
