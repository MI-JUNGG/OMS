const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");

router.use("/auth", userRouter.router);
router.user("/card", cardRouter.router);

module.exports = router;
