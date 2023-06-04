const mypageDao = require("../models/mypageDao");

const mypageInfo = async (userId) => {
  return await mypageDao.mypageInfo(userId);
};

const changeMypage = async (userId, nickname, password, newPassword) => {
  if (nickname) {
    return await mypageDao.changeNickname(nickname, userId);
  } else if (password && newPassword) {
    return await mypageDao.changePassword(newPassword, userId, password);
  }
};

module.exports = { mypageInfo, changeMypage };
