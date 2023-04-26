import "./Nav.scss";
import MonthPicker from "./components/MonthPicker";
import ViewSwitcher from "./components/ViewSwitcher";

function Nav() {
    return (
        <>
            <div className="navWrapper">
                <MonthPicker />
                <ViewSwitcher />
            </div>
        </>
    );
}

export default Nav;
