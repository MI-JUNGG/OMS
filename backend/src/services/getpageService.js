const getpageDao = require("../models/getpageDao");

const monthPage = async (userId, startDate, endDate) => {
  const startMonth = startDate.substr(0, 7);
  const endMonth = endDate.substr(0, 7);

  const result = await getpageDao.monthPage(userId, startMonth, endMonth);

  return result;
};

module.exports = {
  monthPage,
};
