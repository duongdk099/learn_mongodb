const express = require("express");
const router = express();
const userRouter = require("./user");
const accountRouter = require("./account");
const accountLineRouter = require("./accountline");

router.use("/user", userRouter);
router.use("/account", accountRouter);
router.use("/accountline", accountLineRouter);

module.exports = router;