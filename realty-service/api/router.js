const express = require('express');
const router = express.Router();

//Require controller module
const realtyController = require("./controller/realty.controller");

router.get("/api/get", realtyController.getAllRealtys);

module.exports = router;
