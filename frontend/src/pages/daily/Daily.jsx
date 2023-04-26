import Card from "./components/Card";
import Seletime from "/Users/joyunhwan/Desktop/OMS/frontend/src/pages/daily/components/Seletime.jsx";
import CreatedCard from "./components/CreatedCard";
import { useRef } from "react";

import "./Daily.scss";

function Daily() {
    const ref = useRef();
    return (
        <div className="topContanier">
            <div className="contanier">
                <Card />
                <Seletime />
            </div>
            <div className="schedule">
                <CreatedCard />
            </div>
        </div>
    );
}

export default Daily;
