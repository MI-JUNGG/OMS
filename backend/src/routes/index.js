const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const getpageRouter = require("./getPageRouter");

router.use("/auth", userRouter.router);
router.use("/", getpageRouter.router);

module.exports = router;
