const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);
router.post("/kakao", userController.kakaoLogin);

module.exports = {
  router,
};
