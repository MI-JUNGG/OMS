import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NaverCallback = () => {
    const { naver } = window;
    const NAVER_CLIENT_ID = "W9f_MEprUwIoTeyjePIb";
    const NAVER_CALLBACK_URL =
        "https://web-oms-k19y2kljwrybmc.sel4.cloudtype.app/auth/kakao/callback";
    const navigate = useNavigate();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const lastDay = new Date(year, month, 0);

    const startDate = `${year}-${month.toString().padStart(2, "0")}-01`;
    const endDate = `${year}-${month
        .toString()
        .padStart(2, "0")}-${lastDay.getDate()}`;

    const homePageUrl = `/month?date=${startDate}&date=${endDate}`;

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,

            isPopup: false,

            loginButton: { color: "green", type: 1, height: 65 },
            callbackHandle: true,
        });
        naverLogin.init();

        naverLogin.getLoginStatus(async function (status) {
            if (status) {
                const userid = naverLogin.user.getEmail();
                const username = naverLogin.user.getName();
            }
        });
    };

    const userAccessToken = () => {
        window.location.href.includes("access_token") && getToken();
        navigate(homePageUrl);
    };

    const getToken = () => {
        const url = window.location.href;
        const urlObject = new URL(url);
        const accessToken = urlObject.hash.split("=")[1].split("&")[0];

        localStorage.setItem("token", accessToken);

        // axios
        //     .post(
        //         "http://10.99.230.245:3001/auth/naver",
        //         {
        //             naverToken: localStorage.getItem("token"),
        //         },
        //         {
        //             headers: {
        //                 Authorization: localStorage.getItem("token"),
        //                 " Content-type":
        //                     "application/x-www-form-urlencoded;charset=utf-8",
        //             },
        //         },
        //     )
        //     .then((response) => {
        //         console.log(response);
        //         // localStorage.setItem("1", response.data.accessToken);
        //         window.location.href = homePageUrl;
        //     })
        //     .then((error) => {
        //         console.log(error);
        //         alert("에러가 발생했습니다. 다시 로그인 해주세요");
        //         window.location.href = homePageUrl;
        //     });
    };

    useEffect(() => {
        initializeNaverLogin();
        userAccessToken();
    }, []);

    return (
        <>
            <div id="naverIdLogin" />
        </>
    );
};

export default NaverCallback;
