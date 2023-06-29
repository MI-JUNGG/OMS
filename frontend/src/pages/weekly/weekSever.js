import axios from "axios";
import { API, token } from "../daily/server";

export const callData = (dateState, startDate, endDate) => {
    console.log(
        "#33",

        "startDate",
        startDate,
        "endDate",
        endDate,
    );
    axios
        .get(`${API}/week`, {
            params: {
                startDate: startDate,
                endDate: endDate,
            },
            headers: {
                Authorization: token,
            },
        })
        .then((response) => {
            dateState(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
