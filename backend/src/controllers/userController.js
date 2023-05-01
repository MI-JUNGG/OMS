const userService = require("../services/userService");
const { catchAsync, detectError } = require("../utils/detectError");

// local - 회원가입
const signup = catchAsync(async (req, res) => {
  const { name, nickname, email, password } = req.body;

  if (!name || !nickname || !email || !password) detectError("KEY_ERROR", 400);

  await userService.signup(name, nickname, email, password);

  return res.status(201).json({ message: "USER_CREATED!" });
});

// local - 로그인
const signin = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) detectError("KEY_ERROR", 400);

  jwtToken = await userService.signin(email, password);

  return res.status(200).json({ accessToken: jwtToken });
});

// 카카오 로그인
const kakaoLogin = catchAsync(async (req, res) => {
  const kakaoToken = req.headers.authorization;

  if (!kakaoToken) detectError("NOT_ACCESS_TOKEN", 401);

  const kakao_accessToken = await userService.kakaoLogin(kakaoToken);

  return res.status(200).json({ accessToken: kakao_accessToken });
});

module.exports = {
  signup,
  signin,
  kakaoLogin,
};
