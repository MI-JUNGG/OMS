const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const mypageRouter = require("./mypageRouter");

router.use("/auth", userRouter.router);
router.use("/", mypageRouter.router);

module.exports = router;
