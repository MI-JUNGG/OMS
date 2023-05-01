import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sign } from "../../modules/sign";
import "./SignIn.scss";
import {
    KAKAO_CLIENT_ID,
    KAKAO_GRANT_TYPE,
    KAKAO_REDIRECT_URI,
    KAKAO_AUTH_URL,
} from "./kakao";
import {
    NAVER_CLIENT_ID,
    NAVER_STATE_STRING,
    NAVER_CALLBACK_URI,
    NAVER_AUTH_URL,
    NAVER_ACCESS_TOKEN_URL,
    NAVER_CLIENT_SECRET,
} from "./naver";
import axios from "axios";
import { useLocation } from "react-router";
import { email, password } from "/src/modules/login";

function SignIn() {
    const dispatch = useDispatch();

    const handleSignBox = () => {
        dispatch(sign(1));
    };

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    const naverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    };

    const location = useLocation();

    const state = new URL(window.location.href).searchParams.get("state");

    const code = new URL(window.location.href).searchParams.get("code");

    // const kakaoGetCode = async () => {
    //     if (code) {
    //         const response = await axios
    //             .post(
    //                 `https://kauth.kakao.com/oauth/token?grant_type=${KAKAO_GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
    //                 {},
    //                 {
    //                     headers: {
    //                         "Content-type":
    //                             "application/x-www-form-urlencoded;charset=utf-8",
    //                     },
    //                 },
    //             )
    //             .then((res) => {
    //                 console.log(res);
    //                 const accessToken = res.data.access_token;
    //                 localStorage.setItem("token", accessToken);
    //                 alert("성공적으로 로그인 했습니다");

    //                 axios.post(
    //                     `로컬통신주소`,
    //                     {},
    //                     {
    //                         headers: {
    //                             Authorization: `Bearer ${accessToken}`,
    //                             "Content-type":
    //                                 "application/x-www-form-urlencoded;charset=utf-8",
    //                         },
    //                     },
    //                 );
    //                 window.location.replace("/");
    //             });

    //         // Access Token을 이용하여 로그인 처리 등의 작업 수행
    //     }
    // };

    // kakaoGetCode();

    // const naverGetToken = () => {
    //     const { naver } = window;

    //     const naverLogin = new naver.LoginWithNaverId({
    //         clientId: NAVER_CLIENT_ID,
    //         callbackUrl: NAVER_CALLBACK_URI,
    //         isPopup: false /* 팝업을 통한 연동처리 여부, true 면 팝업 */,
    //         // loginButton: {
    //         //     color: "green",
    //         //     type: 1,
    //         //     height: 20,
    //         // } /* 로그인 버튼의 타입을 지정 */,
    //     });

    //     naverLogin.init();

    //     axios
    //         .post(
    //             `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=${code}&state=${state}`,
    //             {},
    //             {
    //                 headers: {
    //                     "Content-type":
    //                         "application/x-www-form-urlencoded;charset=utf-8",
    //                 },
    //             },
    //         )
    //         .then((res) => {
    //             console.log(res);
    //             // 응답 결과를 콘솔에 출력
    //         })
    //         .catch((err) => console.log(err));
    // };

    // // useEffect(() => {
    // //     initializeNaverLogin(); // useEffect로 안하고 onclick하면 로그인배너아이콘 안뜸
    // // }, []);

    // const naverLog = () => {
    //     naverLogin();
    //     naverGetToken();
    // };

    const localLogin = useSelector((state) => state.loginReducer);

    const emailHandler = (e) => {
        dispatch(email(e.target.value));
    };
    const passwordHandler = (e) => {
        dispatch(password(e.target.value));
    };

    console.log(localLogin);

    const userLogin = () => {
        axios
            .post(
                "http://192.168.219.21:3001/auth/signin",
                {
                    email: localLogin.email,
                    password: localLogin.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
            .then((res) => {
                alert("로그인 하셨습니다");
                localStorage.setItem("token", res.data.accessToken);
                window.location.replace("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="signInContainer">
                <h1>로그인</h1>
                <div className="userInput">
                    <input
                        className="userId"
                        placeholder="이메일"
                        onChange={emailHandler}
                    />
                    <input
                        className="userPassword"
                        placeholder="비밀번호"
                        onChange={passwordHandler}
                        type="password"
                    />
                </div>
                <div className="buttonZone">
                    <button className="loginBtn" onClick={userLogin}>
                        로그인
                    </button>
                    <button className="signUpBtn" onClick={handleSignBox}>
                        회원가입
                    </button>
                </div>
                <div className="socialLogin">
                    <div className="kakaoLogin" onClick={kakaoLogin}>
                        <img src="/src/assets/images/kakao.svg" />
                    </div>
                    <div className="naverIdLogin" onClick={naverLogin}>
                        <img src="/src/assets/images/naver.png" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
