import axios from "axios";
import { API, token } from "../daily/server";

export const callData = () => {
    axios
        .get("api", {
            params: {
                startDate: "2023-01-01",
            },
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
};
