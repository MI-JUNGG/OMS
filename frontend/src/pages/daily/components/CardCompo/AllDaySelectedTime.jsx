import { useDispatch, useSelector } from "react-redux";
import { dateControl, endDateControl } from "../../../../modules/module/modal";
import DateRight from "../../../../assets/images/date_picker/DateRight";
import "./AllDaySelectedTime.scss";

function AllDaySelectedTime() {
    const dispatch = useDispatch();
    const { year, month, day } = useSelector((state) => {
        return state.dateReducer;
    });
    const d = useSelector((state) => {
        return state.endDateReducer.day;
    });
    const m = useSelector((state) => {
        return state.endDateReducer.month;
    });
    const y = useSelector((state) => {
        return state.endDateReducer.year;
    });
    console.log(d);
    const isBoolean = useSelector((state) => {
        return state.modalReducer.dateControl;
    });

    const modalhandler = () => {
        dispatch(dateControl());
    };

    const endModalHandler = () => {
        dispatch(endDateControl());
    };

    const getDayOfWeek = (year, month, day) => {
        const today = new Date(year, month, day);
        const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
        const dayIndex = today.getDay(); // 0 (일요일)부터 6 (토요일)까지의 값
        const dayOfWeek = daysOfWeek[dayIndex];
        return dayOfWeek;
    };

    return (
        <div className="selectedDate">
            <div>
                <span>{month}월</span>
                <span>{day}일</span>
                <span>({getDayOfWeek(year, month, day)})</span>
            </div>

            <DateRight />

            <div>
                <span>{m}월</span>
                <span>{d}일</span>
                <span>({getDayOfWeek(y, m, d)})</span>
            </div>
        </div>
    );
}

export default AllDaySelectedTime;
