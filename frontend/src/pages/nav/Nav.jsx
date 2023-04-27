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
                        {modal ? <Sign /> : ""}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
