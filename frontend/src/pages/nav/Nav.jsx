import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Nav.scss";
import MonthPicker from "./components/MonthPicker";
import ViewSwitcher from "./components/ViewSwitcher";
import YearPicker from "./components/YearPicker";
import Sign from "../sign/Sign";
import { sign } from "../../modules/sign";

function Nav() {
    const isSign = useSelector((state) => state.signReducer);
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);

    const HandleModal = () => {
        setModal((prev) => !prev);
        if (isSign.sign === 1) {
            dispatch(sign(0));
        }
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
                            <div>
                                <span
                                    className="loginText"
                                    onClick={HandleModal}
                                >
                                    Login
                                </span>
                                <span className="signUp">Sign Up</span>
                                {modal ? <Sign /> : ""}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Nav;
