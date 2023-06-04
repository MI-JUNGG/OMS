const mypageDao = require("../models/mypageDao");
const { detectError } = require("../utils/detectError");

const mypageInfo = async (userId) => {
  return await mypageDao.mypageInfo(userId);
};

module.exports = { mypageInfo };
