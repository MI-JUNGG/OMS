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
import { addDate, addMonth, addDay } from "../../modules/module/date";
import { eaddDate, eaddMonth, eaddDay } from "../../modules/module/endDate";

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

        const enddateAction = eaddDate(Number(year));
        const endmonthAction = eaddMonth(Number(month));
        const enddayAction = eaddDay(Number(day));

        dispatch(enddateAction);
        dispatch(endmonthAction);
        dispatch(enddayAction);

        dispatch(dateAction);
        dispatch(monthAction);
        dispatch(dayAction);
    };

    useEffect(() => {
        initialState();
        axios
            .get("http://192.168.0.5:3001/day", {
                params: {
                    //수정
                    startDate: "2023-07-07",
                },
                headers: {
                    Authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2ODYyMTM2NDV9.ocHuTfEoZRIBIRa259IWn0TgcPyGKqOMIZ-wOetGIRw",
                },
            })
            .then((response) => {
                console.log(response.data);
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
