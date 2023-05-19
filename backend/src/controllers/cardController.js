const cardService = require("../services/cardService");
const { catchAsync, detectError } = require("../utils/detectError");

const postCard = catchAsync(async (req, res) => {
  const {
    userId,
    repeatId,
    title,
    color,
    link,
    memo,
    start_date,
    end_date,
    deadline,
  } = req.body;

  if (!userId || !repeatId || !title || !color || !start_date || !end_date)
    detectError("KEY_ERROR", 400);

  await cardService.postCard(
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

  return res.status(201).json({ message: "CARD_CREATED!" });
});

module.exports = {
  postCard,
  patchCard,
  deleteCard,
};
