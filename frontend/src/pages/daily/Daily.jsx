import Seletime from "./components/Seletime";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import axios from "axios";
import { useEffect } from "react";
import "./Daily.scss";
import Card from "./components/Card";
import Button from "../button/Button";
import LoginModalBackground from "../sign/LoginModalBackground";
import { cardmodal } from "../../modules/module/modal";
import { addCard } from "../../modules/module/card";
import { callUserCard } from "./server";
import dayjs from "dayjs";

function Daily() {
    const dispatch = useDispatch();
    const ref = useRef();
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const dateString = url.searchParams.get("date");
    const [id, setId] = useState();
    const [year, month, day] = dateString.split("-");
    const token = localStorage.getItem("token");
    const openCard = useSelector((state) => state.modalReducer.cardmodal);
    const form = useSelector((state) => state.dateReducer);
    const handleOutClick = (data) => {
        openCard === false && dispatch(cardmodal());
        dispatch(addCard({ cardType: "day", cardData: data }));
    };

    useEffect(() => {
        const DAY = dayjs(`${year}-${month}-${day}`).format("YYYY-MM-DD");
        callUserCard(handleOutClick, DAY);
    }, []);

    const card = useSelector((state) => state.cardReducer.day);
    const findCard = card.find((item) => item.id === id);

    return (
        <div className="topContanier">
            <DndProvider backend={HTML5Backend}>
                <Seletime setId={setId} />
                {openCard === true && (
                    <>
                        <LoginModalBackground onClick={handleOutClick} />
                        <Card findCard={findCard} />
                    </>
                )}
                <div className="btnHeight">
                    <Button />
                </div>
            </DndProvider>
        </div>
    );
}

export default Daily;
