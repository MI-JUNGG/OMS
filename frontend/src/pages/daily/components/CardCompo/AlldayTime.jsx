import MonthSelector from "./MonthSelector";
import DaySelector from "./DaySelector";
import "./AlldayTime.scss";
import YearSelector from "./YearSelector";

function AlldayTime() {
    return (
        <>
            <div className="yearPicker">
                <YearSelector />
                <MonthSelector />
                <DaySelector />
            </div>
            <button>com</button>
        </>
    );
}

export default AlldayTime;
