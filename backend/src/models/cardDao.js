const { appDataSource } = require("./appDataSource");

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
  return await appDataSource.query(
    `
    INSERT INTO users (
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
    [userId, repeatId, title, color, link, memo, start_date, end_date, deadline]
  );
};

module.exports = {
  postCard,
};
