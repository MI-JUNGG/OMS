import Card from "./components/Card";
import Seletime from "./components/Seletime";
import CreatedCardItem from "./components/CreatedCardItem";
import { useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";

import "./Daily.scss";

function Daily() {
    const ref = useRef();
    const openModal = useSelector((state) => state.modalReducer.cardmodal);
    console.log(openModal);
    return (
        <div className="topContanier">
            <DndProvider backend={HTML5Backend}>
                <div className="contanier">
                    <Card />

                    <Seletime />
                    {openModal === true && <CreatedCardItem />}
                </div>
            </DndProvider>
        </div>
    );
}

export default Daily;
