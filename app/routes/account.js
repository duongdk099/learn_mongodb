const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const accountController = require("../controllers/account");

router.get("/", auth, accountController.getAccounts);

router.post("/", auth, accountController.createAccount);

router.patch("/:id", auth, accountController.updateAccount);

router.delete("/:id", auth, accountController.deleteAccount);

module.exports = router;
