const { appDataSource } = require("./appDataSource");

const mypageInfo = async (userId) => {
  return await appDataSource.query(
    `
    SELECT
      social_type_id       AS socialTypeId,
      email               AS email
    FROM
      users
    WHERE
      id = ?
    `,
    [userId]
  );
};

const changeNickname = async (nickname, userId) => {
  return await appDataSource.query(
    `
    UPDATE
      users
    SET
     nickname = ?
    WHERE
      id = ?
    `,
    [nickname, userId]
  );
};

const changePassword = async (newPassword, userId, password) => {
  const queryRunner = appDataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const checkPassword = `
      SELECT * FROM
        users
      WHERE
        id = ?
      AND
        password = ?
      `;

    const checkResult = await queryRunner.query(checkPassword, [
      userId,
      password,
    ]);

    if (checkResult.length === 0) {
      await queryRunner.rollbackTransaction();
      throw new Error("check your password!");
    }

    const updateQuery = `
      UPDATE
        users
      SET
        password = ?
      WHERE
        id = ?
      `;
    await queryRunner.query(updateQuery, [newPassword, userId]);

    await queryRunner.commitTransaction();
  } catch (err) {
    console.log(err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

module.exports = { mypageInfo, changeNickname, changePassword };
