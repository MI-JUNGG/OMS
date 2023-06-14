import axios from "axios";
import { useDispatch } from "react-redux";
import { addCard } from "../../modules/module/card";

const dispatch = useDispatch();
const API = "";
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2ODYyMTM2NDV9.ocHuTfEoZRIBIRa259IWn0TgcPyGKqOMIZ-wOetGIRw";
export const callUserCard = () => {
    axios
        .get("http://192.168.0.5:3001/day", {
            params: {
                //수정
                startDate: "2023-07-07",
            },
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            console.log(response.data);
            dispatch(addCard(response.data));
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
    axios.put(API, {
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
    }),
        {
            headers: {
                Authorization: token,
                cardId,
            },
        }
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
};

export const DeleteCardHandler = (cardId) => {
    axios.delete(API),
        {
            headers: {
                Authorization: token,
                cardId,
            },
        }

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
