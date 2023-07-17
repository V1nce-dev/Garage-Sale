const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postcontrollers");

router.post("/post", PostController.post)

module.exports = router;