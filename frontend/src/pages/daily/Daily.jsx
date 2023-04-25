import Card from "./components/Card";
import Seletime from "./components/Seletime";
import CreatedCard from "./components/CreatedCard";
import { useRef } from "react";
import { useSelector } from "react-redux";
import "./Daily.scss";

function Daily() {
    const divCount = useSelector((state) => state.divcounterReducer.counter);
    const ref = useRef();
    return (
        <div className="topContanier">
            <div className="contanier">
                <Card />
                <Seletime />
            </div>
            <div className="schedule">
                {Array.from({ length: divCount }, (_, index) => (
                    <CreatedCard key={index} />
                ))}
            </div>
        </div>
    );
}

export default Daily;
