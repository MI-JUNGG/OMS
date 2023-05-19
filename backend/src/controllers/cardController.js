const userService = require("../services/userService");
const { catchAsync, detectError } = require("../utils/detectError");

// local - 회원가입
const postCard = catchAsync(async (req, res) => {
  const { userId, repeatId, title, color, link, memo, start_date, end_date } =
    req.body;

  if (!userId || !repeatId || !title || !color || !start_date || !end_date)
    detectError("KEY_ERROR", 400);

  await userService.signup(name, nickname, email, password);

  return res.status(201).json({ message: "USER_CREATED!" });
});

module.exports = {
  postCard,
  patchCard,
  deleteCard,
};
