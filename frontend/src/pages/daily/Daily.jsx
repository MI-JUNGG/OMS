import Card from "./components/Card";
import Seletime from "./components/Seletime";
import { useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./Daily.scss";

function Daily() {
    const ref = useRef();

    return (
        <div className="topContanier">
            <DndProvider backend={HTML5Backend}>
                <div className="contanier">
                    <Card />
                    <div className="centered">
                        <Seletime />
                    </div>
                </div>
            </DndProvider>
        </div>
    );
}

export default Daily;
