import { useDispatch, useSelector } from "react-redux";
import { cardmodal } from "../../../modules/modal";
import "./Selectime.scss";

function Seletime() {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.cardReducer);
    const test = useSelector((state) => state.modalReducer);

    const showCard = () => {
        dispatch(cardmodal());
    };
    return (
        <div className="hourBox">
            <ul>
                {hours.map((hour) => (
                    <li key={hour}>
                        <div className="time">{hour}</div>
                        <div className="contents">
                            {form.map((item) => {
                                const { time, title } = item;
                                return (
                                    time === hour && (
                                        <div key={hour} onClick={showCard}>
                                            <span>{title}</span>
                                        </div>
                                    )
                                );
                            })}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Seletime;
export const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
];
