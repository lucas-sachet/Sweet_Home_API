const express = require('express');
const router = express.Router();

//Require controller module
const paymentController = require("./controller/payment.controller");

router.get("/api/get", paymentController.getAllPayments);
// router.post("/api/user/create", userController.createUser);
// router.patch("/api/user/:id", userController.updateUser);
// router.delete("/api/user/:id", userController.deleteUser);

module.exports = router;
