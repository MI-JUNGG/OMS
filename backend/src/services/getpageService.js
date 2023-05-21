const getpageDao = require("../models/getpageDao");

const monthPage = async (userId, startDate, endDate) => {
  const result = await getpageDao.monthPage(userId, startDate, endDate);

  return result;
};

module.exports = {
  monthPage,
};
