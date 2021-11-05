const express = require("express");
const { getFibonacci, getCityData } = require("./Controller");

const router = express.Router();

router.get("/api/v1/users/fibonacci/:parameter", getFibonacci);
router.get("/api/v1/users/city/", getCityData);
router.get("/api/v1/users/city/:parameter", getCityData);

module.exports = router;
