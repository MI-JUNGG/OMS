import { useDispatch, useSelector } from "react-redux";
import { limitControl } from "../../../../modules/module/modal";
import "./RepeatBtn.scss";

function RepeatBtn() {
    const year = useSelector((state) => state.limitReducer.year);
    const month = useSelector((state) => state.limitReducer.month);
    const day = useSelector((state) => state.limitReducer.day);
    const dispatch = useDispatch();
    const limitmodalHandler = () => {
        dispatch(limitControl());
    };

    return (
        <div id="repeatType">
            <div className="repeatBot">
                <select name="type">
                    <option value="매일">매일</option>
                    <option value="매주">매주</option>
                    <option value="매달">매달</option>
                    <option value="매년">매년</option>
                </select>
            </div>
            <button type="button" onClick={limitmodalHandler}>
                {year}년 {month}월 {day}일까지 반복
            </button>
        </div>
    );
}

export default RepeatBtn;
