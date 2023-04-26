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
                <ViewSwitcher />
            </div>
        </>
    );
}

export default Nav;
