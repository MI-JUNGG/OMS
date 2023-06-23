import axios from "axios";

export const API = "http://10.99.230.245:3001";
export const token = localStorage.getItem("token");
export const callUserCard = (handleOutClick, day) => {
    axios
        .get(`${API}/day`, {
            params: {
                //수정
                startDate: day,
            },
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            handleOutClick([...response.data]);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const counterHandler = (
    title,
    contents,
    startDate,
    repeatE,
    color,
    url,
    repeatId,
    limitDate,
) => {
    console.log(
        1,
        "title: " + title,
        "contents: " + contents,
        "startDate :" + startDate,
        "endDate :" + repeatE,
        "color : " + color,
        "url : " + url,
        "repeatCardType : " + repeatId,
        "limitDate : " + limitDate,
    );
    console.log(limitDate);
    const config = {
        headers: {
            Authorization: token,
        },
    };

    axios
        .post(
            `${API}/day`,
            {
                title: title,
                memo: contents,
                startDate: startDate.toISOString(),
                repeatId: repeatId,
                endDate: repeatE.toISOString(),
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
};

export const FixCardHandler = (
    title,
    contents,
    startDate,
    endDate,
    color,
    url,
    repeatId,
) => {
    console.log(
        "title: " + title,
        "contents: " + contents,
        "startDate :" + startDate,
        "endDate :" + endDate,
        "color : " + color,
        "url : " + url,
        "repeatCardType : " + repeatCardType,
    );

    axios
        .put(
            `${API}/card`,
            {
                cardId: cardId,
                title: title,
                memo: contents,
                startDate: startDate.toISOString(),
                repeatId: 2,
                endDate: endDate.toISOString(),
                color: color,
                link: url,
                deadline: endDate.toISOString(),
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
    console.log(cardId);
    axios
        .delete(`${API}/card`, {
            headers: {
                Authorization: token,
            },
            data: {
                cardId: cardId,
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
