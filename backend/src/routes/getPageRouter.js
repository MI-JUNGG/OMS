const express = require("express");
const router = express.Router();

const getpageController = require("../controllers/getpageController");

router.get("/month", getpageController.monthPage);
//router.get("/week", getpageController.weekPage);
//router.get("/day", getpageController.dayPage);

module.exports = {
  router,
};
