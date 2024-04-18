const express = require("express");
const router = express.Router();
const accountLineController = require("../controllers/accountline");

router.get("/", accountLineController.createAccountLine);

module.exports = router;