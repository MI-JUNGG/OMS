const mypageService = require("../services/mypageService");
const { catchAsync, detectError } = require("../utils/detectError");

const mypageInfo = catchAsync(async (req, res) => {
  const userId = req.userId;

  if (!userId) detectError("NEED_USER_ID", 400);

  await mypageService.mypageInfo(userId);

  return res.status(201).json({ message: "USER_CREATED!" });
});

module.exports = { mypageInfo };
