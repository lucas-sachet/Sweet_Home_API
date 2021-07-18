const express = require('express');
const router = express.Router();

//Require controller module
const userController = require("./controller/user.controller");

router.get("/api/get", userController.getAllUsers);

module.exports = router;
