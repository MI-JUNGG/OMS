const express = require("express");
const router = express.Router();
const { validateToken } = require("../utils/auth");

const userController = require("../controllers/userController");

router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);
router.post("/kakao", userController.kakaoLogin);

module.exports = {
  router,
};
