const { appDataSource } = require("./appDataSource");

// const formatDateTime = (date) => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");

//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// };

const monthPage = async (userId, startMonth, endMonth) => {
  console.log("dao", startMonth, endMonth);
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
    `,
    [userId, `%${startMonth}%`, `%${endMonth}%`]
  );
  console.log(result);
  return result;
};

// AND c.start_date LIKE CONCAT(?, '%')
// AND c.end_date LIKE CONCAT(?, '%')

module.exports = {
  monthPage,
};
