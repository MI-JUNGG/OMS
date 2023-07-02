import MonthSelector from "../MonthSelector";
import DaySelector from "../DaySelector";
import "../AlldayTime.scss";
import YearSelector from "../YearSelector";
import TimeSelector from "../TimeSelector";
import MinSelector from "../MinSelector";
import { useSelector, useDispatch } from "react-redux";
import { dateControl } from "../../../../modules/module/modal";

function Start() {
    const openModal = useSelector((state) => state.modalReducer.dateControl);
    const datetype = useSelector((state) => state.modalReducer.datetype);
    const dispatch = useDispatch();
    const saveDate = () => {
        dispatch(dateControl());
    };
    return (
        <div>
            <div className="timeTable">
                <div className="yearPicker">
                    <YearSelector />
                    <MonthSelector />
                    <DaySelector />
                    {datetype === true ? (
                        <div>
                            <TimeSelector />
                            <p className="col">:</p>
                            <MinSelector />
                        </div>
                    ) : (
                        <div>요일</div>
                    )}
                </div>
                <div className="btnColor">
                    <button>반복 종료 안함</button>
                    <button onClick={saveDate}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Start;
