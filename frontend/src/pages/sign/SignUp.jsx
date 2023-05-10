import { useSelector, useDispatch } from "react-redux";
import { name, nickName, password, eMail } from "../../modules/user";
import axios from "axios";
import "./SignUp.scss";
import { sign } from "../../modules/sign";

function SignUp() {
    const dispatch = useDispatch();
    const userInputForm = useSelector((state) => state.userReducer);
    const backToLogin = () => {
        dispatch(sign(0));
    };

    const nameHandler = (e) => {
        dispatch(name(e.target.value));
    };
    const nickNameHandler = (e) => {
        dispatch(nickName(e.target.value));
    };
    const passwordHandler = (e) => {
        dispatch(password(e.target.value));
    };
    const eMailHandler = (e) => {
        dispatch(eMail(e.target.value));
    };

    const userInfoSub = () => {
        axios
            .post(
                "http://192.168.219.21:3001/auth/signup",
                {
                    name: userInputForm.name,
                    nickname: userInputForm.nickName,
                    password: userInputForm.password,
                    email: userInputForm.eMail,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="signUpContainer">
                <h1 className="signUpTitle">회원가입</h1>
                <div className="inputZone">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름"
                            value={userInputForm.name}
                            onChange={(e) => {
                                nameHandler(e);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="nickname"
                            placeholder="닉네임"
                            value={userInputForm.nickName}
                            onChange={(e) => {
                                nickNameHandler(e);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            value={userInputForm.password}
                            onChange={(e) => {
                                passwordHandler(e);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="이메일"
                            value={userInputForm.eMail}
                            onChange={(e) => {
                                eMailHandler(e);
                            }}
                        />
                    </div>
                </div>
                <button
                    className="signUpSub"
                    type="button"
                    onClick={userInfoSub}
                >
                    회원가입
                </button>
                <div className="backToLogin">
                    <span>이미 계정이 있으신가요?</span>
                    <a onClick={backToLogin}>로그인하기</a>
                </div>
                <div className="socialSignUp">
                    <div className="kakaoSignUp">
                        <img src="/src/assets/images/social_logo/kakao.svg" />
                        <span>
                            Kakao
                            <br />
                            회원가입
                        </span>
                    </div>
                    <div className="naverSignUp">
                        <img src="/src/assets/images/social_logo/naver.svg" />
                        <span>
                            Naver
                            <br />
                            회원가입
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
