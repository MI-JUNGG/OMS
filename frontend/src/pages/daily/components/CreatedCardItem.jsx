import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import "./CreatedCard.scss";

function CreatedCardItem({ title, content, id }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "SELETIME",
        item: { id: "seletime" },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} className="createted">
            <div>
                <span>제목: {title}</span>
                <span>할일: {content}</span>
            </div>
        </div>
    );
}

export default CreatedCardItem;
