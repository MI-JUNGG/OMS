const mypageDao = require("../models/mypageDao");
const bcrypt = require("bcrypt");
const { detectError } = require("../utils/detectError");

const mypageInfo = async (userId) => {
  return await mypageDao.mypageInfo(userId);
};

const changeNickname = async (nickname, userId) => {
  return await mypageDao.changeNickname(nickname, userId);
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

const getTheme = async (userId) => {
  return await mypageDao.getTheme(userId);
};

const changeTheme = async (
  mainColor,
  backgroundColor,
  textStyle,
  textColor,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  userId
) => {
  return await mypageDao.changeTheme(
    mainColor,
    backgroundColor,
    textStyle,
    textColor,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    userId
  );
};

module.exports = {
  mypageInfo,
  changeNickname,
  changePassword,
  getTheme,
  changeTheme,
};
