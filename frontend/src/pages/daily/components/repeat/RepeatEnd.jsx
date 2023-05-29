import EndYear from "./end/EndYear";
import EndMonth from "./end/EndMonth";
import EndDay from "./end/EndDay";
import "../CardCompo/AlldayTime.scss";

function RepeatEnd() {
    return (
        <div className="yearPicker">
            <EndYear />
            <EndMonth />
            <EndDay />
            <div className="btnColor">
                <button>반복 종료 안함</button>
                <button>저장</button>
            </div>
        </div>
    );
}

export default RepeatEnd;
