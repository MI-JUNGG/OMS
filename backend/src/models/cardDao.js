const { appDataSource } = require("./appDataSource");

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
  const formattedStartDate = new Date(startDate.replace(/%20/g, " "));
  const formattedEndDate = new Date(endDate.replace(/%20/g, " "));

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
      deadline,
    ]
  );
};

const patchCard = async (
  repeatId,
  title,
  color,
  link,
  memo,
  start_date,
  end_date,
  deadline,
  cardId,
  userId
) => {
  const changeRepeatId = repeatId ? `repeat_id = ?` : ``;
  const changeTitle = title ? `title = ?` : ``;
  const changeColor = color ? `color = ?` : ``;
  const changeLink = link ? `link = ?` : ``;
  const changeMemo = memo ? `memo = ?` : ``;
  const changeStartDate = start_date ? `start_date = ?` : ``;
  const changeEndDate = end_date ? `end_date = ?` : ``;
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
    [
      repeatId,
      title,
      color,
      link,
      memo,
      start_date,
      end_date,
      deadline,
      cardId,
      userId,
    ]
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
