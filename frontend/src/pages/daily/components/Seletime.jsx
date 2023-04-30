import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardmodal } from "../../../modules/modal";
import "./Selectime.scss";
import CreatedCardItem from "./CreatedCardItem";

function Seletime() {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.cardReducer);
    const openModal = useSelector((state) => state.modalReducer.cardmodal);
    const [clickedLi, setClickedLi] = useState(null);
    console.log(form);
    const showCard = (event) => {
        const li = event.target.closest("li");
        setClickedLi(li);
        dispatch(cardmodal());
    };

    const getModalPosition = () => {
        if (!clickedLi) return null;

        const liRect = clickedLi.getBoundingClientRect();
        const modalHeight = 200; // adjust this to match the height of the modal

        if (liRect.bottom + modalHeight <= window.innerHeight) {
            // display below the clicked li
            return {
                top: liRect.bottom,
                left: liRect.left,
            };
        } else if (liRect.top >= modalHeight) {
            // display above the clicked li
            return {
                bottom: window.innerHeight - liRect.top,
                left: liRect.left,
            };
        } else {
            // display at the bottom of the screen
            return {
                bottom: 0,
                left: liRect.left,
            };
        }
    };

    return (
        <div className="hourBox">
            <ul>
                {hours.map((hour, i) => (
                    <li key={hour}>
                        <div className="time">{hour}</div>
                        <div className="contents">
                            {form.map((item) => {
                                const { time, title } = item;
                                return (
                                    time === hour && (
                                        <div
                                            className="card"
                                            key={i}
                                            onClick={showCard}
                                        >
                                            <span>{title}</span>
                                        </div>
                                    )
                                );
                            })}
                        </div>
                    </li>
                ))}
            </ul>
            {openModal && (
                <div className="modalWrapper" style={getModalPosition()}>
                    <CreatedCardItem />
                </div>
            )}
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
