const getpageService = require("../services/getpageService");
const { catchAsync, detectError } = require("../utils/detectError");
const dayjs = require("dayjs");

const monthPage = catchAsync(async (req, res) => {
  const { startDate, endDate } = req.query;
  const userId = req.userId;

  if (!userId || !startDate || !endDate)
    detectError("NEED_USER_ID OR NEED_DATE_INFO", 400);

  const result = await getpageService.monthPage(userId, startDate, endDate);

  return res.status(200).json(result);
});

const weekPage = catchAsync(async (req, res) => {
  const { startDate, endDate } = req.query;
  const userId = req.userId;

  if (!userId || !startDate || !endDate)
    detectError("NEED_USER_ID OR NEED_DATE_INFO", 400);

  const result = await getpageService.weekPage(userId, startDate, endDate);

  return res.status(200).json(result);
});

const dayPage = catchAsync(async (req, res) => {
  const { startDate } = req.query;
  const userId = req.userId;

  const date = dayjs(startDate);
  const plusTime = date.format("YYYY-MM-DDTHH:mm:ss");

  if (!userId || !startDate) detectError("NEED_USER_ID OR NEED_DATE_INFO", 400);

  const result = await getpageService.dayPage(userId, plusTime);

  return res.status(200).json(result);
});

module.exports = {
  monthPage,
  weekPage,
  dayPage,
};
