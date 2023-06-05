const bcrypt = require("bcrypt");
const { appDataSource } = require("./appDataSource");

const mypageInfo = async (userId) => {
  return await appDataSource.query(
    `
    SELECT
      social_type_id       AS socialTypeId,
      email                AS email
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

const getHashedPassword = async (userId) => {
  const password = appDataSource.query(
    `
    SELECT
      password
    FROM
      users
    WHERE
      id = ?
    `,
    [userId]
  );
  return password;
};

const updatePassword = async (userId, hashedNewPassword) => {
  return await appDataSource.query(
    `
      UPDATE
        users
      SET
        password = ?
      WHERE
        id = ?
      `,
    [hashedNewPassword, userId]
  );
};

const getTheme = async (userId) => {
  return await appDataSource.query(
    `
    SELECT
      main_color                     AS mainColor,
      background_color               AS backgroundColor,
      text_style                     AS textStyle,
      text_color                     AS textColor,
      color_palette_id               AS colorPaletteId,
      JSON_ARRAY(
        color_palette.color1,
        color_palette.color2,
        color_palette.color3,
        color_palette.color4,
        color_palette.color5,
        color_palette.color6,
        color_palette.color7
      )
    FROM
      mypage
    JOIN
      color_palette
    ON
      users.color_palette_id = color_palette.id
    WHERE
      user_id = ?
    `,
    [userId]
  );
};

module.exports = {
  mypageInfo,
  changeNickname,
  getHashedPassword,
  updatePassword,
  getTheme,
};
