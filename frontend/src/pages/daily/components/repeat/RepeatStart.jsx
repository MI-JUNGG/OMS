import Year from "./start/Year.jsx";
import Month from "./start/Month.jsx";
import Day from "./start/Day.jsx";
import { useDispatch } from "react-redux";
import { repeatControl } from "../../../../modules/module/modal.js";
import "../CardCompo/AlldayTime.scss";

function RepeatStart() {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(repeatControl());
    };

    return (
        <div className="timeTable">
            <div className="yearPicker">
                <Year />
                <Month />
                <Day />
            </div>
            <div className="btnColor">
                <button onClick={onClickHandler}>저장</button>
            </div>
        </div>
    );
}

export default RepeatStart;
