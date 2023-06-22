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
    repeatE,
    endDate,
    color,
    url,
    repeatCardType,
) => {
    console.log(repeatCardType);

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
                startDate: repeatE.toISOString(),
                repeatId: repeatCardType,
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
    cardId,
) => {
    console.log(title, contents, repeatE, repeatId, endDate, color, url);
    axios
        .put(
            `${API}/card`,
            {
                cardId: cardId,
                title: title,
                memo: contents,
                startDate: repeatE.toISOString(),
                repeatId: 2,
                endDate: repeatE.toISOString(),
                color: color,
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
