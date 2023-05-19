const cardDao = require("../models/cardDao");
// const { detectError } = require("../utils/detectError");
const postCard = async (
  title,
  color,
  link,
  memo,
  start_date,
  end_date,
  deadline
) => {
  const postCard = await cardDao.postCard(
    title,
    color,
    link,
    memo,
    start_date,
    end_date,
    deadline
  );

  return postCard;
};

module.exports = {
  postCard,
};
