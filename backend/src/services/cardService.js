const cardDao = require("../models/cardDao");
const { detectError } = require("../utils/detectError");

const postCard = async (
  userId,
  repeatId,
  title,
  color,
  link,
  memo,
  start_date,
  end_date,
  deadline
) => {
  const postCard = await cardDao.postCard(
    userId,
    repeatId,
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
  patchCard,
  deleteCard,
};
