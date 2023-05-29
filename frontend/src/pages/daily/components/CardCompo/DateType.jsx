import { useDispatch, useSelector } from "react-redux";
import { dateType } from "../../../../modules/module/modal";
import "./DateType.scss";

function DateType() {
    const colorSelector = useSelector((state) => state.modalReducer.dateType);
    const dispatch = useDispatch();

    const showAll = () => {
        dispatch(dateType(true));
    };

    const showRepeat = () => {
        dispatch(dateType(false));
    };

    const isSelectedAll = colorSelector === true ? "select" : "unselect";
    const isSelectedRepeat = colorSelector === false ? "select" : "unselect";

    return (
        <div className="btnstyle">
            <button className={isSelectedAll} onClick={showAll}>
                종일
            </button>
            <button className={isSelectedRepeat} onClick={showRepeat}>
                반복
            </button>
        </div>
    );
}

export default DateType;
