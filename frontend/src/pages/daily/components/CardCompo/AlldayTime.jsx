import MonthSelector from "./MonthSelector";
import DaySelector from "./DaySelector";
import "./AlldayTime.scss";
import YearSelector from "./YearSelector";

function AlldayTime() {
    return (
        <div className="timeTable">
            <div className="yearPicker">
                <YearSelector />
                <MonthSelector />
                <DaySelector />
            </div>
            <div className="btnColor">
                <button>빈벅 종료 안함</button>
                <button>저장</button>
            </div>
        </div>
    );
}

export default AlldayTime;
