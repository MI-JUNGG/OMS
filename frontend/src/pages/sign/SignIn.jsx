import { useDispatch, useSelector } from "react-redux";
import { sign } from "../../modules/module/sign";
import "./SignIn.scss";
import {
    KAKAO_CLIENT_ID,
    KAKAO_GRANT_TYPE,
    KAKAO_REDIRECT_URI,
    KAKAO_AUTH_URL,
} from "./kakao";
import { NAVER_AUTH_URL } from "./naver";
import NaverLogin from "./naverLogin";
import axios from "axios";
import { useLocation } from "react-router";
import { email, password } from "/src/modules/module/login";

function SignIn() {
    const dispatch = useDispatch();

    const handleSignBox = () => {
        dispatch(sign(1));
    };

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    const naverLoginMove = () => {
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

    const localLogin = useSelector((state) => state.loginReducer);

    const emailHandler = (e) => {
        dispatch(email(e.target.value));
    };
    const passwordHandler = (e) => {
        dispatch(password(e.target.value));
    };

    const userLogin = () => {
        axios
            .post(
                "http://192.168.219.152:3001/auth/signin",
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
                <div className="stayLogged">
                    <input type="checkbox" />
                    <span>로그인 상태 유지</span>
                </div>
                <div className="buttonZone">
                    <button className="loginBtn" onClick={userLogin}>
                        로그인
                    </button>
                    <div>
                        <span>아직 계정이 없으신가요?</span>
                        <a onClick={handleSignBox}>회원가입하기</a>
                    </div>
                </div>
                <div className="socialLogin">
                    <div className="kakaoLogin" onClick={kakaoLogin}>
                        <img src="/src/assets/images/social_logo/kakao.svg" />
                        <span>
                            Kakao
                            <br />
                            로그인
                        </span>
                    </div>
                    <div className="naverIdLogin" onClick={naverLoginMove}>
                        <img src="/src/assets/images/social_logo/naver.svg" />
                        <span>
                            Naver
                            <br />
                            로그인
                        </span>
                    </div>
                    <NaverLogin />
                </div>
            </div>
        </>
    );
}

export default SignIn;
