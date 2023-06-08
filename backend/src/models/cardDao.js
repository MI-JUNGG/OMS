const { appDataSource } = require("./appDataSource");

const postCard = async (
  userId,
  repeatId,
  title,
  color,
  link,
  memo,
  formattedStartDate,
  formattedEndDate,
  formatteddeadlineDate
) => {
  return await appDataSource.query(
    `
    INSERT INTO card (
      user_id,
      repeat_id,
      title,
      color,
      link,
      memo,
      start_date,
      end_date,
      deadline
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    )`,
    [
      userId,
      repeatId,
      title,
      color,
      link,
      memo,
      formattedStartDate,
      formattedEndDate,
      formatteddeadlineDate,
    ]
  );
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
  const changeRepeatId = repeatId ? `repeat_id = ?` : ``;
  const changeTitle = title ? `title = ?` : ``;
  const changeColor = color ? `color = ?` : ``;
  const changeLink = link ? `link = ?` : ``;
  const changeMemo = memo ? `memo = ?` : ``;
  const changeStartDate = startDate ? `start_date = ?` : ``;
  const changeEndDate = endDate ? `end_date = ?` : ``;
  const changeDeadline = deadline ? `deadline = ?` : ``;

  const result = await appDataSource.query(
    `
    UPDATE
      card
    SET
      ${changeRepeatId}
      ${changeTitle}
      ${changeColor}
      ${changeLink}
      ${changeMemo}
      ${changeStartDate}
      ${changeEndDate}
      ${changeDeadline}
    WHERE
      id = ? AND user_id = ?
    `,
    [repeatId, title, color, link, memo, startDate, endDate, deadline, cardId]
  );

  return result;
};

const deleteCard = async (cardId, userId) => {
  return await appDataSource.query(
    `
    DELETE FROM
     card
    WHERE
      id = ? AND user_id = ?
     `,
    [cardId, userId]
  );
};

module.exports = {
  postCard,
  patchCard,
  deleteCard,
};
