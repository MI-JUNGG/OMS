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
  const { nickname, password, newPassword } = req.body;

  await mypageService.changeMypage(userId, nickname, password, newPassword);

  return res.status(201).json({ message: "CHANGED!" });
});

module.exports = { mypageInfo, changeMypage };
