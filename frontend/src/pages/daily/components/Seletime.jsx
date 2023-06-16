import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { hours } from "../time";
import DateLeft from "../../../assets/images/date_picker/DateLeft";
import DateRight from "../../../assets/images/date_picker/DateRight";
import { cardTypeReducer } from "../../../modules/module/modal";
import { cardmodal } from "../../../modules/module/modal";

import "./Selectime.scss";
import { useDispatch, useSelector } from "react-redux";

function Selectime() {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get("date");
    const formatDate = dayjs(day);
    const returnDate = formatDate.format("YYYY.MM.DD");
    console.log(returnDate);
    const [date, setDate] = useState(returnDate);
    const navigate = useNavigate();
    const [test, setTest] = useState([
        {
            cardId: 15,
            start: "2023-06-08 01:00",
            end: "2023-06-08 5:00",
            title: "Test Title",
            color: "yellow",
        },
        {
            cardId: 16,
            start: "2023-06-08 06:00",
            end: "2023-06-08 7:00",
            title: "Test Title",
            color: "blue",
        },
        {
            cardId: 17,
            start: "2023-06-08 20:00",
            end: "2023-06-08 21:00",
            title: "Test Title",
            color: "red",
        },
        {
            cardId: 18,
            start: "2023-06-08 22:00",
            end: "2023-06-08 23:00",
            title: "Test Title",
            color: "red",
        },
        {
            cardId: 19,
            start: "2023-06-08 01:00",
            end: "2023-06-08 02:00",
            title: "Test Title",
            color: "red",
        },
    ]);

    const cardType = useSelector((state) => state.modalReducer.FixCard);

    const datePlusHandler = () => {
        const formatDate = new Date(date);
        formatDate.setDate(formatDate.getDate() + 1);
        const year = formatDate.getFullYear();
        const month = String(formatDate.getMonth() + 1).padStart(2, "0");
        const day = String(formatDate.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        setDate(formattedDate);
        const newLocation = `/day?date=${year}-${month}-${day}`;
        navigate(newLocation);
    };

    const dateMinusHandler = () => {
        const formatDate = new Date(date);
        formatDate.setDate(formatDate.getDate() - 1);
        const year = formatDate.getFullYear();
        const month = String(formatDate.getMonth() + 1).padStart(2, "0");
        const day = String(formatDate.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        setDate(formattedDate);
        const newLocation = `/day?date=${year}-${month}-${day}`;
        navigate(newLocation);
    };

    const fixModalHandler = () => {
        dispatch(cardmodal());
        dispatch(cardTypeReducer());
    };

    return (
        <div className="dayTable">
            <div className="dayChanger">
                <div className="minusDay" onClick={dateMinusHandler}>
                    <DateLeft />
                </div>
                <div>{returnDate}</div>
                <div className="plusDay" onClick={datePlusHandler}>
                    <DateRight />
                </div>
            </div>

            {hours.map((hour) => {
                const hourSplit = hour.split(":");
                const hourValue = Number(hourSplit[0]);

                const matchingEvents = test.filter((event) => {
                    const eventStart = dayjs(event.start);
                    const eventEnd = dayjs(event.end);
                    const eventStartHour = eventStart.hour();
                    const eventEndHour = eventEnd.hour();

                    return (
                        hourValue >= eventStartHour && hourValue < eventEndHour
                    );
                });

                if (matchingEvents.length > 0) {
                    return (
                        <div key={hour} className="timeContainer">
                            <div className="timeSlot">{hour}</div>
                            <div className="timeBorder"></div>
                            {matchingEvents.map((event, index) => {
                                const startTime = dayjs(event.start).format(
                                    "HH:mm",
                                );

                                return (
                                    <div
                                        key={event.cardId}
                                        className={`${
                                            index !== matchingEvents.length - 1
                                                ? "contents"
                                                : "otherContents"
                                        } ${hour === startTime ? "first" : ""}`}
                                        style={{
                                            backgroundColor: event.color,
                                        }}
                                    >
                                        {hour === startTime && event.title}
                                    </div>
                                );
                            })}
                        </div>
                    );
                } else {
                    return (
                        <div key={hour} className="timeContainer">
                            <div className="timeSlot">{hour}</div>
                            <div className="timeBorder"></div>
                            <div className="contents"></div>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default Selectime;
