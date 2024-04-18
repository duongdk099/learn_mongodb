const express = require("express");
const router = express.Router();
const accountLineController = require("../controllers/accountline");

router.get("/:id", accountLineController.getAccountsLine);

router.post("/:id", accountLineController.createAccountLine);

router.patch("/:id", accountLineController.updateAccountLine);

router.delete("/:id", accountLineController.deleteAccountLine);

module.exports = router;
