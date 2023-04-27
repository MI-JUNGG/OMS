import "./Selectime.scss";
import { useDrop } from "react-dnd";

function Seletime() {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "SELETIME",
        canDrop: (item) => {
            // 드랍이 가능한지 확인하는 작업을 수행합니다.
            return true;
        },
        drop: (item, monitor) => {
            // 드랍이 발생했을 때 수행할 작업을 처리합니다.
            console.log("item", item);
            console.log("monitor", monitor);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));
    const hours = [
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

    return (
        <div ref={drop} className="hourBox">
            <ul>
                {hours.map((hour, i) => (
                    <li key={i}>
                        <span className="time">{hour}</span>
                        <span className="contents"></span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Seletime;
