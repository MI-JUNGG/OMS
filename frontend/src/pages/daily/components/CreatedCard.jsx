import { useSelector } from "react-redux";
import "./CreatedCard.scss";

function CreatedCard() {
    const form = useSelector((state) => state.cardReducer);

    return (
        <div>
            {form.map((item) => {
                const { title, content, id } = item;
                return (
                    <div key={id} className="createted">
                        <div>
                            <span>제목: {title}</span>
                            <span>할일: {content}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default CreatedCard;
