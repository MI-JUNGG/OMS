import axios from "axios";

import { addCard } from "../../modules/module/card";

export const API = "10.99.246.181";
export const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2ODY4MjE2ODZ9.CcP95C4a17JnLgmassY7yvgEsCpCrjqoxAJQCTRICS8";
export const callUserCard = (handleOutClick) => {
    axios
        .get("http://10.99.246.181:3001/day", {
            params: {
                //수정
                startDate: "2023-07-07",
            },
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            handleOutClick(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const counterHandler = (
    title,
    contents,
    repeatE,
    repeatId,
    endDate,
    color,
    url,
) => {
    console.log(typeof repeatE);
    console.log(
        "title",
        title,
        "memo",
        contents,
        "startDate",
        repeatE,
        "repeatId",
        repeatId,
        "endDate",
        endDate,
        "color",
        color,
        "url",
        url,
    );

    const config = {
        headers: {
            Authorization: token,
        },
    };

    axios
        .post(
            API,
            {
                // title: title,
                title: "1234",
                memo: contents,
                startDate: repeatE.toISOString(),
                // repeatId: repeatId,
                repeatId: 2,
                endDate: repeatE.toISOString(),
                // color: color,
                color: "#1234",
                link: url,
                deadline: repeatE.toISOString(),
            },
            config,
        )
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log("error", error);
        });

    console.log(endDate);
};

export const FixCardHandler = (
    title,
    contents,
    repeatE,
    repeatId,
    endDate,
    color,
    url,
) => {
    console.log(title, contents, repeatE, repeatId, endDate, color, url);
    axios
        .put(
            `http://${API}:3001/card`,
            {
                cardId: 26,
                title: "수정수정",
                memo: contents,
                startDate: repeatE.toISOString(),
                repeatId: 2,
                endDate: repeatE.toISOString(),
                color: "#1234",
                link: url,
                deadline: repeatE.toISOString(),
            },
            {
                headers: {
                    Authorization: token,
                },
            },
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const DeleteCardHandler = (cardId) => {
    axios
        .delete(`http://${API}:3001/card`, {
            headers: {
                Authorization: token,
            },
            data: {
                cardId: 27,
            },
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function (data) {
            console.log(data);
        });
};
