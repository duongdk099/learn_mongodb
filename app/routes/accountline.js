const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const accountLineController = require("../controllers/accountline");

router.get("/:id", auth, accountLineController.getAccountsLine);

router.post("/:id", auth, accountLineController.createAccountLine);

router.patch("/:id", auth, accountLineController.updateAccountLine);

router.delete("/:id", auth, accountLineController.deleteAccountLine);

module.exports = router;
