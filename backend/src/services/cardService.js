const cardDao = require("../models/cardDao");

const postCard = async (
  userId,
  repeatId,
  title,
  color,
  link,
  memo,
  startDate,
  endDate,
  deadline
) => {
  const postCard = await cardDao.postCard(
    userId,
    repeatId,
    title,
    color,
    link,
    memo,
    startDate,
    endDate,
    deadline
  );

  return postCard;
};

const patchCard = async (
  repeatId,
  title,
  color,
  link,
  memo,
  startDate,
  endDate,
  deadline,
  cardId
) => {
  const patchCard = await cardDao.patchCard(
    repeatId,
    title,
    color,
    link,
    memo,
    startDate,
    endDate,
    deadline,
    cardId
  );

  return patchCard;
};

const deleteCard = async (cardId, userId) => {
  const deleteCard = await cardDao.deleteCard(cardId, userId);

  return deleteCard;
};

module.exports = {
  postCard,
  patchCard,
  deleteCard,
};
