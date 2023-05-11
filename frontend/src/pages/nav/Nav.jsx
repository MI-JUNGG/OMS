import { useSelector, useDispatch } from "react-redux";
import "./Nav.scss";
import MonthPicker from "./components/MonthPicker";
import ViewSwitcher from "./components/ViewSwitcher";
import YearPicker from "./components/YearPicker";
import Sign from "../sign/Sign";
import LoginModalBackground from "../sign/LoginModalBackground";
import { loginModal } from "../../modules/loginModal";
import { sign } from "../../modules/sign";

function Nav() {
    const isLoginModal = useSelector(
        (state) => state.loginModalReducer.loginModal,
    );
    const dispatch = useDispatch();
    console.log(isLoginModal);

    const HandleModal = () => {
        dispatch(loginModal());
    };

    return (
        <>
            <div className="navWrapper">
                <div>로고</div>
                <ViewSwitcher />
                <div className="login">
                    {localStorage.getItem("token") ? (
                        <>
                            <span
                                className="loginText"
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    alert("로그아웃 하셨습니다");
                                    window.location.replace("/");
                                }}
                            >
                                로그아웃
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="loginText" onClick={HandleModal}>
                                Login
                            </span>

                            {isLoginModal ? (
                                <>
                                    <LoginModalBackground
                                        onClick={() => {
                                            HandleModal();
                                            dispatch(sign(0));
                                        }}
                                    />
                                    <Sign />
                                </>
                            ) : (
                                ""
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Nav;
