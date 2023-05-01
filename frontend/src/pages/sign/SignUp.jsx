import { useSelector, useDispatch } from "react-redux";
import { name, nickName, password, eMail } from "../../modules/user";
import axios from "axios";
import "./SignUp.scss";

function SignUp() {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.userReducer);

    console.log(form);

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
                "http://localhost:5173/auth/signup",
                {
                    name: form.name,
                    nickname: form.nickName,
                    password: form.password,
                    email: form.eMail,
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
                        <span>이름</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름"
                            value={form.name}
                            onChange={(e) => {
                                nameHandler(e);
                            }}
                        />
                    </div>
                    <div>
                        <span>닉네임</span>
                        <input
                            type="text"
                            name="nickname"
                            placeholder="닉네임"
                            value={form.nickName}
                            onChange={(e) => {
                                nickNameHandler(e);
                            }}
                        />
                    </div>
                    <div>
                        <span>비밀번호</span>
                        <input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            value={form.password}
                            onChange={(e) => {
                                passwordHandler(e);
                            }}
                        />
                    </div>
                    <div>
                        <span>이메일</span>
                        <input
                            type="text"
                            name="email"
                            placeholder="이메일"
                            value={form.eMail}
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
            </div>
        </>
    );
}

export default SignUp;
