const express = require("express");
const router = express.Router();
const { upload, post } = require("../controllers/postcontrollers");

router.post("/post", upload.single("image"), post);

module.exports = router;
