import { useDispatch, useSelector } from "react-redux";
import { dateControl } from "../../../../modules/module/modal";
import DateRight from "../../../../assets/images/date_picker/DateRight";
import "./AllDaySelectedTime.scss";

function AllDaySelectedTime() {
    const dispatch = useDispatch();
    const { year, month, day } = useSelector((state) => {
        return state.dateReducer;
    });
    const isBoolean = useSelector((state) => {
        return state.modalReducer.dateControl;
    });
    console.log(isBoolean);

    const modalhandler = () => {
        dispatch(dateControl());
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
            <div onClick={modalhandler}>
                <span>{month}월</span>
                <span>{day}일</span>
                <span>({getDayOfWeek(year, month, day)})</span>
                {/* <span>PM</span> */}
            </div>

            <DateRight />

            <div onClick={modalhandler}>
                <span>{month}월</span>
                <span>{day}일</span>
                <span>({getDayOfWeek(year, month, day)})</span>
                {/* <span>PM</span> */}
            </div>
        </div>
    );
}

export default AllDaySelectedTime;
