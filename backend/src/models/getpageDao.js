const { appDataSource } = require("./appDataSource");

const monthPage = async (userId, startMonth, endMonth) => {
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
    AND DATE_FORMAT(c.start_date, '%Y-%m') = ?
    AND DATE_FORMAT(c.end_date, '%Y-%m') = ?
    ORDER BY c.start_date ASC
    `,
    [userId, startMonth, endMonth]
  );

  return result;
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

const dayPage = async (userId, startMonth, endMonth) => {
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
    AND DATE_FORMAT(c.start_date, '%Y-%m') = ?
    AND DATE_FORMAT(c.end_date, '%Y-%m') = ?
    ORDER BY c.start_date ASC
    `,
    [userId, startMonth, endMonth]
  );

  return result;
};

module.exports = {
  monthPage,
  weekPage,
  dayPage,
};
