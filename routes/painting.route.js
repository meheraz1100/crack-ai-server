const express = require("express");
const { testRoute, generatePaint } = require("../controllers/paintings.controller");
const router = express.Router();

router.get('/', testRoute);
router.post("/generate", generatePaint);

// router.post('/');

module.exports = router;
