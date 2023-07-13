const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usercontrollers");

router.post("/register", UserController.register);

router.post("/authenticate", UserController.authenticate);

module.exports = router;