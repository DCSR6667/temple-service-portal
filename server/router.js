const express = require("express");
const router = express.Router();
const { get_dieties } = require("./controllers/get_dieties");
const { get_dates } = require("./controllers/get_dates");

router.get("/get_dieties", get_dieties);
router.get("/get_dates", get_dates);

module.exports = router;
