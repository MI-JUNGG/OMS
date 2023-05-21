const cardDao = require("../models/cardDao");

const postCard = async (
  userId,
  repeat_id,
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
    repeat_id,
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
