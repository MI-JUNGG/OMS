import axios from "axios";

export const counterHandler = (
    title,
    contents,
    startDate,
    repeatId,
    endDate,
    color,
    url,
) => {
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDczNDYwNn0.aRiYcyPZ6wyixzWbQnDWKzbCb8BlHMVSg3LnTQ2oZnA";
    const config = {
        headers: {
            Authorization: token,
        },
    };

    axios
        .post(
            "http://192.168.219.152:3001/card",
            {
                title: title,
                memo: contents,
                startDate: startDate,
                repeatId: repeatId,
                endDate: endDate,
                color: color,
                link: url,
                deadline: endDate,
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
