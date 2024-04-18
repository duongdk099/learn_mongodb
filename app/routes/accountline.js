const express = require("express");
const router = express.Router();
const accountLineController = require("../controllers/accountline");

router.get("/", accountLineController.getAccountsLine);

router.post("/", accountLineController.createAccountLine);

router.patch("/:id", accountLineController.updateAccountLine);

router.delete("/:id", accountLineController.deleteAccountLine);

module.exports = router;
