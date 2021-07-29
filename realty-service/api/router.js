const express = require('express');
const router = express.Router();

//Require controller module
const realtyController = require("./controller/realty.controller");

router.get("/api/realty/get", realtyController.getAllRealtys);
router.post("/api/realty/create", realtyController.createRealty);
router.patch("/api/realty/:id", realtyController.updateRealty);
router.delete("/api/realty/:id", realtyController.deleteRealty);

module.exports = router;
