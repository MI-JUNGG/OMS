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
      ) AS colorPalette
    FROM
      mypage
    JOIN
      color_palette
    ON
      mypage.color_palette_id = color_palette.id
    WHERE
      user_id = ?
    `,
    [userId]
  );
};

const changeThemeSettings = async (
  mainColor,
  backgroundColor,
  textStyle,
  textColor,
  userId
) => {
  const result = appDataSource.query(
    `
    UPDATE
      mypage
    SET
      main_color = ?,
      background_color = ?,
      text_style = ?,
      text_color = ?
    WHERE
      user_id = ?
    `,
    [mainColor, backgroundColor, textStyle, textColor, userId]
  );
  console.log(result);
  return result;
};

const changeThemeColor = async (
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  userId
) => {
  const paletteId = 6;
  const existingPalette = await appDataSource.query(
    `
    SELECT * FROM
      color_palette
    WHERE
      id = ?
    `,
    [paletteId]
  );

  if (existingPalette) {
    const updatePalette = `
    UPDATE
      color_palette c
    JOIN
      mypage m ON m.color_palette_id = c.id
    SET
      c.color1 = ?,
      c.color2 = ?,
      c.color3 = ?,
      c.color4 = ?,
      c.color5 = ?,
      c.color6 = ?,
      c.color7 = ?
    WHERE
      c.id = ?
    AMD
      m.user_id = ?
    `;

    await appDataSource.query(updatePalette, [
      color1,
      color2,
      color3,
      color4,
      color5,
      color6,
      color7,
      paletteId,
      userId,
    ]);
  } else {
    const insertPalette = `
    INSERT INTO
      color_palette 
      ( id,
        color1,
        color2,
        color3,
        color4,
        color5,
        color6,
        color7 )
    VALUES
      ( ?, ?, ?, ?, ?, ?, ?, ? )
    `;

    await appDataSource.query(insertPalette, [
      paletteId,
      color1,
      color2,
      color3,
      color4,
      color5,
      color6,
    ]);
  }
};

module.exports = {
  mypageInfo,
  changeNickname,
  getHashedPassword,
  updatePassword,
  getTheme,
  changeThemeSettings,
  changeThemeColor,
};
