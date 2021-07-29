const express = require('express');
const router = express.Router();

//Require controller module
const userController = require("./controller/user.controller");

router.get("/api/get", userController.getAllUsers);
router.get("/api/user/:id", userController.loginUser);
router.post("/api/user/create", userController.createUser);
router.patch("/api/user/:id", userController.updateUser);
router.delete("/api/user/:id", userController.deleteUser);

module.exports = router;
