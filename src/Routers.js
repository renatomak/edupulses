const express = require("express");
const { getFibonacci } = require("./Controller");

const router = express.Router();

router.get("/api/v1/users/fibonacci/:parameter", getFibonacci);
router.get("/api/v1/users/cyty/:parameter", (req, res) => {});

module.exports = router;
