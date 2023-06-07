const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const cardRouter = require("./cardRouter");

router.use("/auth", userRouter.router);
router.use("/card", cardRouter.router);

module.exports = router;
