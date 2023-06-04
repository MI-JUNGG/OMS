const { appDataSource } = require("./appDataSource");

const mypageInfo = async (userId) => {
  return await appDataSource.query(
    `
    SELECT
      social_id,
      email
    FROM
      users
    WHERE
      id = ?
    `,
    [userId]
  );
};

module.exports = { mypageInfo };
