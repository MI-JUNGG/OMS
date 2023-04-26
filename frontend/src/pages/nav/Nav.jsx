import "./Nav.scss";
import MonthPicker from "./components/MonthPicker";
import ViewSwitcher from "./components/ViewSwitcher";
import YearPicker from "./components/YearPicker";

function Nav() {
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
                    <span className="login">로그인</span>
                </div>
            </div>
        </>
    );
}

export default Nav;
