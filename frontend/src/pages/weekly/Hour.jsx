import { hours } from "../daily/time";
import "./Hour.scss";

function Hour() {
    return (
        <div className="hourContanier">
            {hours.map((hour) => {
                return <div className="hour">{hour}</div>;
            })}
        </div>
    );
}

export default Hour;
