const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const accountLineController = require("../controllers/accountline");

router.get("/:AccountId", auth, accountLineController.getAccountsLine);

router.post("/:AccountId", auth, accountLineController.createAccountLine);

router.patch("/:AccountId", auth, accountLineController.updateAccountLine);

router.delete("/:AccountId", auth, accountLineController.deleteAccountLine);

module.exports = router;
