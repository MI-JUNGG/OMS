const getpageDao = require("../models/getpageDao");

const monthPage = async (userId, startDate, endDate) => {
  const startMonth = startDate.substr(0, 7);
  const endMonth = endDate.substr(0, 7);

  const result = await getpageDao.monthPage(userId, startMonth, endMonth);

  return result;
};

const weekPage = async (userId, startDate, endDate) => {
  const startMonth = startDate.substr(0, 10);
  const endMonth = endDate.substr(0, 10);

  const result = await getpageDao.weekPage(userId, startMonth, endMonth);

  return result;
};

const dayPage = async (userId, startDate) => {
  const startMonth = startDate.substr(0, 10);

  const result = await getpageDao.dayPage(userId, startMonth);

  return result;
};

module.exports = {
  monthPage,
  weekPage,
  dayPage,
};
