const mypageDao = require("../models/mypageDao");
const bcrypt = require("bcrypt");
const { detectError } = require("../utils/detectError");

const mypageInfo = async (userId) => {
  return await mypageDao.mypageInfo(userId);
};

const changeNickname = async (userId, nickname) => {
  return await mypageDao.changeNickname(userId, nickname);
};

const changePassword = async (userId, currentPassword, newPassword) => {
  const [checkUserId] = await mypageDao.getHashedPassword(userId);
  const hashedPassword = checkUserId.password;

  const isPasswordMatch = await bcrypt.compare(currentPassword, hashedPassword);
  if (!isPasswordMatch) detectError("비밀번호가 일치하지 않습니다!", 400);

  const saltRounds = 12;
  const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
  await mypageDao.updatePassword(userId, hashedNewPassword);
};

const theme = async (userId) => {
  return await mypageDao.theme(userId);
};

module.exports = { mypageInfo, changeNickname, changePassword, theme };
