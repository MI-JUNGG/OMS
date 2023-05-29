import Year from "./start/Year";
import Month from "./start/Month";
import Day from "./start/Day";
import "../CardCompo/AlldayTime.scss";

function RepeatStart() {
    return (
        <div className="yearPicker">
            <Year />
            <Month />
            <Day />
            <div className="btnColor">
                <button>반복 종료 안함</button>
                <button>저장</button>
            </div>
        </div>
    );
}

export default RepeatStart;
