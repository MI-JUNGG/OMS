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

const changeTheme = async (
  mainColor,
  backgroundColor,
  textStyle,
  textColor,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  userId
) => {
  const queryRunner = appDataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try{
    const updateFields = [
      mainColor ? `m.main_color = ?` : ``,
      backgroundColor ? `m.background_color = ?`: ``,
      textStyle ? `m.text_style = ?` : ``,
      textColor ? `m.text_color = ?` : ``
    ].filter(value => value !== "").join(", ");

    const insertFields = [
      color1 ? `c.color1 = ?` : ``,
      color2 ? `c.color2 = ?` : ``,
      color3 ? `c.color3 = ?` : ``,
      color4 ? `c.color4 = ?` : ``,
      color5 ? `c.color5 = ?` : ``,
      color6 ? `c.color6 = ?` : ``,
      color7 ? `c.color7 = ?` : ``
    ].filter(value => value !== "").join(", ");

    const updateParams = [
      mainColor,
      backgroundColor,
      textStyle,
      textColor,
      userId
    ].filter(value => value !== "")

    const insertParams = [
      color1,
      color2,
      color3,
      color4,
      color5,
      color6,
      color7

    ].filter(value => value !== "")

    const updateQuery =
    `
      UPDATE
        mypage m
      SET
        ${updateFields}
      WHERE
        m.user_id = ?
    `

    const insertQuery =
    `
      INSERT INTO
        color_palette
      SET
        ${insertFields}
    `

    await queryRunner.query(updateQuery, updateParams)
    await queryRunner.query(insertQuery, insertParams)

    await queryRunner.commitTransaction()
  } catch (err) {
    await queryRunner.rollbackTransaction()
    throw error
  } finally {
    await queryRunner.release()
  }

  

  const changeMainColor = mainColor ? `m.main_color = ?,` : ``;
  const changeBackgroundColor = backgroundColor
    ? `m.background_color = ?,`
    : ``;
  const changeTextStyle = textStyle ? `m.text_style = ?,` : ``;
  const changeTextColor = textColor ? `m.text_color = ?,` : ``;
  const changeColor1 = color1 ? `c.color1 = ?,` : ``;
  const changeColor2 = color2 ? `c.color2 = ?,` : ``;
  const changeColor3 = color3 ? `c.color3 = ?,` : ``;
  const changeColor4 = color4 ? `c.color4 = ?,` : ``;
  const changeColor5 = color5 ? `c.color5 = ?,` : ``;
  const changeColor6 = color6 ? `c.color6 = ?,` : ``;
  const changeColor7 = color7 ? `c.color7 = ?` : ``;

  const updateFields = [
    changeMainColor,
    changeBackgroundColor,
    changeTextColor,
    changeTextStyle,
    changeColor1,
    changeColor2,
    changeColor3,
    changeColor4,
    changeColor5,
    changeColor6,
    changeColor7,
  ]
    .filter((value) => value !== "")
    .join("\n");

  return await appDataSource.query(
    `
      UPDATE
        mypage m
      JOIN
        color_palette c
      ON
        mypage.color_palette_id = color_palette.id
      SET
        ${updateFields}
      WHERE
        m.user_id = ?
      `,
    [
      mainColor,
      backgroundColor,
      textStyle,
      textColor,
      color1,
      color2,
      color3,
      color4,
      color5,
      color6,
      color7,
      userId,
    ]



    const insertQuery =
    `
      INSERT INTO
        color_palette
      SET
        ${insertFields}
    `

};

module.exports = {
  mypageInfo,
  changeNickname,
  getHashedPassword,
  updatePassword,
  getTheme,
  changeTheme,
};
