import axios from "axios";
import card from "../../modules/module/card";

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
    id,
    title,
    contents,
    startDate,
    endDate,
    color,
    url,
    repeatId,
    limitDate,
) => {
    console.log(
        "id: " + id,
        "title: " + title,
        "contents: " + contents,
        "startDate :" + startDate,
        "endDate :" + endDate,
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
                cardId: id,
                title: title,
                memo: contents,
                startDate: startDate.toISOString(),
                repeatId: repeatId,
                endDate: endDate.toISOString(),
                color: "#1234",
                link: url,
                deadline: limitDate.toISOString(),
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
    id,
    title,
    contents,
    startDate,
    endDate,
    color,
    url,
    repeatId,
    limitDate,
) => {
    console.log(
        "cardId:" + id,
        "title: " + title,
        "contents: " + contents,
        "startDate :" + startDate,
        "endDate :" + endDate,
        "color : " + color,
        "url : " + url,
        "repeatCardType : " + repeatId,
        limitDate,
    );
    console.log("fix", limitDate);
    axios
        .put(
            `${API}/card`,
            {
                cardId: id,
                title: title,
                memo: contents,
                startDate: startDate.toISOString(),
                repeatId: repeatId,
                endDate: endDate.toISOString(),
                color: "#1234",
                link: url,
                deadline: limitDate.toISOString(),
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

export const DeleteCardHandler = (id) => {
    console.log("id:" + id);
    axios
        .delete(`${API}/card`, {
            headers: {
                Authorization: token,
            },
            data: {
                cardId: id,
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
