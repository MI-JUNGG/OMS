const userDao = require("../models/userDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { detectError } = require("../utils/detectError");

const SocialTypeId = Object.freeze({
  LOCAL: 1,
  KAKAO: 2,
  NAVER: 3,
});

// LOCAL 회원가입
const signup = async (name, nickname, email, password) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})"
  );

  if (!pwValidation.test(password)) detectError("PASSWORD_ERROR", 400);

  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const createUser = await userDao.localCreateUser(
    name,
    nickname,
    email,
    hashedPassword
  );

  return createUser;
};

const signin = async (email, password) => {
  const hashedPassword = await userDao.getHashedPassword(email);
  if (!hashedPassword) detectError("PASSWORD_DOES_NOT_MATCH", 400);

  const compare = await bcrypt.compare(password, hashedPassword);
  if (!compare) detectError("PASSWORD_DOES_NOT_MATCH", 400);

  const userData = await userDao.getUserId(email);

  const payLoad = { userData: userData.userId };
  const jwtToken = jwt.sign(payLoad, process.env.JWT_SECRET);

  return jwtToken;
};

const kakaoLogin = async (kakaoToken) => {
  const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  if (!result) detectError("KAKAO_TOKEN_ERROR", 400);

  const { data } = result;
  const socialId = data.id;
  const name = data.properties.name;
  const nickname = data.properties.nickname;
  const email = data.kakao_account.email;
  const socialTypeId = SocialTypeId.KAKAO;

  const userId = await userDao.checkUserById(socialId);

  if (!userId) {
    const newUser = await userDao.createUser(
      socialId,
      name,
      nickname,
      email,
      socialTypeId
    );

    return (accessToken = jwt.sign(
      { userId: newUser.insertId },
      process.env.JWT_SECRET
    ));
  }
  return (accessToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET));
};

module.exports = {
  signup,
  signin,
  kakaoLogin,
};
