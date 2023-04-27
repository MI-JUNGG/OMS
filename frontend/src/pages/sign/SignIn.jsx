import { useDispatch } from "react-redux";
import { sign } from "../../modules/sign";
import "./SignIn.scss";
import { KAKAO_AUTH_URL, REST_API_KEY } from "./kakao";
import axios from "axios";

function SignIn() {
    const dispatch = useDispatch();

    const handleSignBox = () => {
        dispatch(sign(1));
    };

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    const getCode = () => {
        const code = new URL(window.location.href).searchParams.get("code");
        if (code) {
            axios
                .post("/api/kakao", { code, clientId: REST_API_KEY })
                .then((res) => {
                    // 백엔드 서버에서 받은 Access Token을 이용하여 로그인 처리
                    console.log(res);
                });
        }
    };

    getCode();

    return (
        <>
            <div className="signInContainer">
                <h1>로그인</h1>
                <div className="userInput">
                    <input className="userId" placeholder="이메일" />
                    <input className="userPassword" placeholder="비밀번호" />
                </div>
                <div className="buttonZone">
                    <button className="loginBtn">로그인</button>
                    <button className="signUpBtn" onClick={handleSignBox}>
                        회원가입
                    </button>
                </div>
                <div className="socialLogin">
                    <div className="kakaoLogin" onClick={kakaoLogin}>
                        <img src="/src/assets/images/kakao.svg" />
                    </div>
                    <div className="naverLogin">
                        <img src="/src/assets/images/naver.png" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
