import Card from "./components/Card";
import Seletime from "/Users/joyunhwan/Desktop/OMS/frontend/src/pages/daily/components/Seletime.jsx";
import CreatedCard from "./components/CreatedCard";
import "./Daily.scss";

function Daily() {
    return (
        <div className="topContanier">
            <div className="contanier">
                <Card />
                <Seletime />
            </div>
            <div>
                <CreatedCard />
            </div>
        </div>
    );
}

export default Daily;
