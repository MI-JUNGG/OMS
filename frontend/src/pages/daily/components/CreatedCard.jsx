import { useSelector, useDispatch } from "react-redux";
import { title, content } from "../../../modules/card";
import "./CreatedCard.scss";

function CreatedCard() {
    const form = useSelector((state) => state.cardReducer);
    const { title, content } = form;
    return (
        <div className="createted">
            <span>{title}</span>
            <div>{content}</div>
        </div>
    );
}

export default CreatedCard;
