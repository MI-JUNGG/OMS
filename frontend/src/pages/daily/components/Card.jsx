import "./Card.scss";
import { useSelector, useDispatch } from "react-redux";
import { title, content } from "../../../modules/card";
import { counter } from "../../../modules/divcounter";

function Card() {
    const dispatch = useDispatch();
    const create = useSelector((state) => state.cardReducer);

    const createTitle = (e) => {
        dispatch(title(e.target.value));
    };
    const createContent = (e) => {
        dispatch(content(e.target.value));
    };
    const counterHandler = (e) => {
        dispatch(counter());
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
                    <textarea onChange={createTitle} name="title" />
                </div>
                <div className="contents">
                    <span>contents</span>
                    <textarea onChange={createContent} name="contents" />
                </div>

                <button onClick={counterHandler} type="button">
                    완료
                </button>
            </div>
        </div>
    );
}

export default Card;
