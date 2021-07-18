const express = require('express');
const router = express.Router();

//Require controller module
const paymentController = require("./controller/payment.controller");

router.get("/api/get", paymentController.getAllPayments);

module.exports = router;
