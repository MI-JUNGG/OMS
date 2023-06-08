import axios from "axios";

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

    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2ODYyMTM2NDV9.ocHuTfEoZRIBIRa259IWn0TgcPyGKqOMIZ-wOetGIRw";
    const config = {
        headers: {
            Authorization: token,
        },
    };

    axios
        .post(
            "http://192.168.0.5:3001/card",
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
