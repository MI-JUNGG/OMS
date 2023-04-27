import { useSelector } from "react-redux";
import CreatedCardItem from "./CreatedCardItem";
import "./CreatedCard.scss";

function CreatedCard() {
    const form = useSelector((state) => state.cardReducer);

    return (
        <div>
            {form.map((item) => (
                <CreatedCardItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export default CreatedCard;
