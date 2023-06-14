import axios from "axios";
import React, { useEffect } from "react";

function NaverCallback() {
    const NAVER_CLIENT_ID = "W9f_MEprUwIoTeyjePIb";
    const NAVER_CLIENT_SECRET = "z9qj_eIPjD";
    const NAVER_STATE_STRING = Math.random().toString(36).substr(3, 14);
    const NAVER_CALLBACK_URI = "http://localhost:5173/auth/naver/callback";

    const code = new URL(window.location.href).searchParams.get("code");
    const state = new URL(window.location.href).searchParams.get("state");

    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STATE_STRING}&redirect_uri=${NAVER_CALLBACK_URI}`;
    const NAVER_ACCESS_TOKEN_URL = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=EIc5bFrl4RibFls1&state=9kgsGTfH4j7IyAkg&state=${state}`;

    console.log(state);
    console.log(code);

    useEffect(() => {
        axios
            .post(
                `https://nid.naver.com/oauth2.0/token?client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&grant_type=authorization_code&state=${state}&code=${code}`,

                {},
                {
                    headers: {
                        "Content-type": "application/json",
                    },
                },
            )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                console.log("a");
            })
            .catch((err) => console.log(err));
        // if (window.location.href.includes("access_token")) {
        //     window.localStorage.setItem(
        //         "token",
        //         window.location.href.split("=")[1].split("&")[0] ?? "none",
        //     );
        //     // location("/");
        // }
    }, []);

    return <div>NaverCallback</div>;
}

export default NaverCallback;
