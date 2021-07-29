const express = require('express');
const router = express.Router();

//Require controller module
const reportController = require("./controller/report.controller");

router.get("/api/get", reportController.getAllReports);
// router.post("/api/user/create", userController.createUser);
// router.patch("/api/user/:id", userController.updateUser);
// router.delete("/api/user/:id", userController.deleteUser);

module.exports = router;
