const getpageService = require("../services/getpageService");
const { catchAsync, detectError } = require("../utils/detectError");

const monthPage = catchAsync(async (req, res) => {
  const { userId, startDate, endDate } = req.query;
  console.log("cont", userId, typeof startDate);
  if (!userId || !startDate || !endDate)
    detectError("NEED_USER_ID OR NEED_DATE_INFO", 400);

  const result = await getpageService.monthPage(userId, startDate, endDate);

  return res.status(200).json({ result: result });
});

module.exports = {
  monthPage,
};
