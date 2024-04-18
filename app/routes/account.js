const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account");

router.get("/", accountController.getAccounts);

router.post("/", accountController.createAccount);

router.patch("/:id", accountController.updateAccount);

router.delete("/:id", accountController.deleteAccount);

module.exports = router;