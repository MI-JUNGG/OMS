import axios from "axios";
import card from "../../modules/module/card";

const { VITE_API_URL } = import.meta.env;

export const API = VITE_API_URL;
// export const token = localStorage.getItem("token");
export const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2ODgzMDIzMzV9.D9eAyiUwfuWFNxgNXOi5bnHb3vH8UAtFRTbK-i3nNBs";

export const callUserCard = (handleOutClick, day) => {
    axios
        .get(`${API}/day`, {
            params: {
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
    endDate,
    color,
    url,
    repeatId,
    limitDate,
) => {
    console.log("i'm here");
    console.log(
        "title: " + title,
        "contents: " + contents,
        "startDate :" + startDate,
        "endDate :" + endDate,
        "color : " + color,
        "url : " + url,
        "repeatCardType : " + repeatId,
        "limitDate : " + limitDate,
    );
    console.log(endDate);
    const config = {
        headers: {
            Authorization: token,
        },
    };

    axios
        .post(
            `${API}/card`,
            {
                title: title,
                memo: contents,
                startDate: startDate,
                repeatId: repeatId,
                endDate: endDate,
                color: "#1234",
                link: url,
                deadline: limitDate,
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
    console.log("fix", endDate);
    axios
        .put(
            `${API}/card`,
            {
                cardId: id,
                title: title,
                memo: contents,
                startDate: startDate,
                repeatId: repeatId,
                endDate: endDate,
                color: "#1234",
                link: url,
                deadline: limitDate,
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
    alert("삭제 완료");
};
