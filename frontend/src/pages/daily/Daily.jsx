import Seletime from "./components/Seletime";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import axios from "axios";
import { useEffect } from "react";
import "./Daily.scss";
import Card from "./components/Card";
import Button from "../button/Button";
import LoginModalBackground from "../sign/LoginModalBackground";
import { cardmodal } from "../../modules/module/modal";
import {
    addDate,
    addMonth,
    addDay,
    addTime,
    addMin,
} from "../../modules/module/date";

function Daily() {
    const dispatch = useDispatch();
    const ref = useRef();
    const token = localStorage.getItem("token");
    const openCard = useSelector((state) => state.modalReducer.cardmodal);
    const form = useSelector((state) => state.dateReducer);
    const handleOutClick = () => {
        dispatch(cardmodal());
    };

    const initialState = () => {
        const currentURL = window.location.href;
        const url = new URL(currentURL);
        const dateString = url.searchParams.get("date");
        const [year, month, day] = dateString.split("-");

        const dateAction = addDate(Number(year));
        const monthAction = addMonth(Number(month));
        const dayAction = addDay(Number(day));

        dispatch(dateAction);
        dispatch(monthAction);
        dispatch(dayAction);
    };

    useEffect(() => {
        initialState();
        axios
            .get("http://192.168.219.152/3001/card/day", {
                params: {
                    date: "2023-03-04",
                },
                headers: {
                    Authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6MSwiaWF0IjoxNjgyOTMxMjAyfQ.qbyo8xpoRQV1WbCNFiOzMC3-0pFQOjsHgN8heIc_qhc",
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="topContanier">
            <DndProvider backend={HTML5Backend}>
                <Seletime />
                {openCard === true && (
                    <>
                        <LoginModalBackground onClick={handleOutClick} />
                        <Card />
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
