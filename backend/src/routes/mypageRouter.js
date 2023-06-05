const express = require("express");
const router = express.Router();
const { validateToken } = require("../utils/auth");

const mypageController = require("../controllers/mypageController");

router.get("/mypage", validateToken, mypageController.mypageInfo);
router.put("/mypage", validateToken, mypageController.changeMypage);
router.get("/theme", validateToken, mypageController.theme);
// router.put("/theme", validateToken, mypageController.changeTheme);

module.exports = {
  router,
};
