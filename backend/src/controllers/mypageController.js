const mypageService = require("../services/mypageService");
const { catchAsync, detectError } = require("../utils/detectError");

const mypageInfo = catchAsync(async (req, res) => {
  const userId = req.userId;

  if (!userId) detectError("NEED_USER_ID", 400);

  const [userEmail] = await mypageService.mypageInfo(userId);

  return res.status(201).json(userEmail);
});

const changeMypage = catchAsync(async (req, res) => {
  const userId = req.userId;
  const { nickname, currentPassword, newPassword } = req.body;

  if (userId && nickname) {
    await mypageService.changeNickname(nickname, userId);

    return res.status(201).json({ message: "NICKNAME_CHANGED!" });
  } else if (userId && currentPassword && newPassword) {
    await mypageService.changePassword(userId, currentPassword, newPassword);

    return res.status(201).json({ message: "PASSWORD_CHANGED!" });
  }
});

const getTheme = catchAsync(async (req, res) => {
  const userId = req.userId;

  if (!userId) detectError("NEED_USER_ID", 400);

  const [result] = await mypageService.getTheme(userId);

  return res.status(201).json(result);
});

const changeTheme = catchAsync(async (req, res) => {
  const userId = req.userId;
  const { mainColor, backgroundColor, textStyle, textColor, colorPaletteId } =
    req.body;
  if (!userId) detectError("NEED_USER_ID", 400);

  const result = await mypageService.changeTheme(
    mainColor,
    backgroundColor,
    textStyle,
    textColor,
    colorPaletteId,
    userId
  );
  return res.status(201).json({ message: "설정 업데이트!" });
});

const changeColor = catchAsync(async (req, res) => {
  const userId = req.userId;
  const { color1, color2, color3, color4, color5, color6, color7 } = req.body;

  if (!userId) detectError("NEED_USER_ID", 400);
  if (!color1 || !color2 || !color3 || !color4 || !color5 || !color6 || !color7)
    detectError("NEED_COLOR", 400);

  const result = await mypageService.changeColor(
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    userId
  );

  return res.status(201).json({ message: "팔레트 업데이트!" });
});

module.exports = {
  mypageInfo,
  changeMypage,
  getTheme,
  changeTheme,
  changeColor,
};
