const express = require('express');
const router = express.Router();

//Require controller module
const reportController = require("./controller/report.controller");

router.get("/api/get", reportController.getAllReports);

module.exports = router;
