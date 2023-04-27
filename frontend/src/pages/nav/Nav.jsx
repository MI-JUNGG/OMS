import { useState } from "react";
import "./Nav.scss";
import MonthPicker from "./components/MonthPicker";
import ViewSwitcher from "./components/ViewSwitcher";
import YearPicker from "./components/YearPicker";
import SignIn from "../sign/SignIn";

function Nav() {
    const [modal, setModal] = useState(false);

    const HandleModal = () => {
        setModal((prev) => !prev);
    };
    console.log(modal);

    return (
        <>
            <div className="navWrapper">
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <YearPicker />
                    <MonthPicker />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <ViewSwitcher />
                    <div className="login">
                        <span className="loginText" onClick={HandleModal}>
                            로그인
                        </span>
                        {modal ? <SignIn /> : ""}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
