import { useDispatch, useSelector } from "@reduxjs/toolkit/es/react-redux";
import { Addcard } from "../../../modules/card";
import "./Card.scss";

function Card() {
    const createCard = useSelector((state) => {
        state;
    });
    console.log(createCard);
    const dispatch = useDispatch();
    const cardHandler = () => {
        dispatch(Addcard());
    };
    return (
        <div>
            <div className="card">
                <div className="selectColor">
                    <span>color</span>
                    <span>color</span>
                    <span>color</span>
                </div>
                <div className="cardTitle">
                    <span>title</span>
                    <textarea name="title" />
                </div>
                <div className="contents">
                    <span>contents</span>
                    <textarea name="contents" />
                </div>

                <button type="button">완료</button>
            </div>
        </div>
    );
}

export default Card;
