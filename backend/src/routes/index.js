const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");

router.user("/auth", userRouter.router);

module.exports = router;
