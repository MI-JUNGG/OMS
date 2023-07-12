import axios from "axios";

const { VITE_API_URL } = import.meta.env;

export const API = VITE_API_URL;
// export const token = localStorage.getItem("token");
export const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2ODgzOTM1ODV9._My69GAEXFUmA7BZ2iib1WsvhY2e3Rzbof6QKKZg4_s";

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
