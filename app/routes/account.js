const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account");

router.get("/", accountController.getAccounts);

module.exports = router;