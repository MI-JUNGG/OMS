const { appDataSource } = require("./appDataSource");

// const monthPage = async (userId, startMonth, endMonth) => {
//   const result = await appDataSource.query(
//     `
//     SELECT
//       c.id                        AS cardId,
//       c.title                     AS title,
//       c.repeat_id                 AS \`repeat\`,
//       c.start_date                AS \`start\`,
//       c.end_date                  AS end,
//       c.deadline                  AS deadline,
//       c.memo                      AS memo,
//       c.link                      AS link,
//       m.color_palette_id          AS colorPaletteId
//     FROM
//       card c
//     LEFT JOIN mypage m            ON c.user_id = m.user_id
//     WHERE c.user_id = ?
//     AND DATE_FORMAT(c.start_date, '%Y-%m') = ?
//     AND DATE_FORMAT(c.end_date, '%Y-%m') = ?
//     ORDER BY c.start_date ASC
//     `,
//     [userId, startMonth, endMonth]
//   );

//   return result;
// };

const monthPage = async (userId, startMonth, endMonth) => {
  const queryRunner = appDataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const result1 = await queryRunner.query(
      `
      SELECT
        color1,
        color2,
        color3,
        color4,
        color5,
        color6,
        color7
      FROM
        color_palette
      WHERE id = 6 
      `
    );

    const result2 = await queryRunner.query(
      `
      SELECT
        c.id                        AS cardId,
        c.title                     AS title,
        c.repeat_id                 AS \`repeat\`,
        c.start_date                AS \`start\`,
        c.end_date                  AS end,
        c.deadline                  AS deadline,
        c.memo                      AS memo,
        c.link                      AS link,
        m.color_palette_id          AS colorPaletteId
      FROM
        card c
      LEFT JOIN mypage m            ON c.user_id = m.user_id 
      WHERE c.user_id = ?
      AND DATE_FORMAT(c.start_date, '%Y-%m') = ?
      AND DATE_FORMAT(c.end_date, '%Y-%m') = ?
      ORDER BY c.start_date ASC
      `,
      [userId, startMonth, endMonth]
    );

    await queryRunner.commitTransaction();

    return [result1, result2];
  } catch (err) {
    console.log(err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

const weekPage = async (userId, startMonth, endMonth) => {
  const result = await appDataSource.query(
    `
    SELECT
      c.id                        AS cardId,
      c.title                     AS title,
      c.repeat_id                 AS \`repeat\`,
      c.start_date                AS \`start\`,
      c.end_date                  AS end,
      c.deadline                  AS deadline,
      c.memo                      AS memo,
      c.link                      AS link
    FROM
      card c
    WHERE c.user_id = ?
    AND DATE_FORMAT(c.start_date, '%Y-%m-%d') >= ?
    AND DATE_FORMAT(c.end_date, '%Y-%m-$d') <= ?
    ORDER BY c.start_date ASC
    `,
    [userId, startMonth, endMonth]
  );

  return result;
};

const dayPage = async (userId, startMonth) => {
  const result = await appDataSource.query(
    `
    SELECT
      c.id                        AS cardId,
      c.title                     AS title,
      c.repeat_id                 AS \`repeat\`,
      c.start_date                AS \`start\`,
      c.deadline                  AS deadline,
      c.memo                      AS memo,
      c.link                      AS link
    FROM
      card c
    WHERE c.user_id = ?
    AND DATE_FORMAT(c.start_date, '%Y-%m-%d') = ?
    ORDER BY c.start_date ASC
    `,
    [userId, startMonth]
  );

  return result;
};

module.exports = {
  monthPage,
  weekPage,
  dayPage,
};
