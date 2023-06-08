import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Selectime.scss";

const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
];

function Seletime() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const day = searchParams.get("date");
    const [date, setDate] = useState(day);
    const navigate = useNavigate();
    const [test, setTest] = useState({
        start: "2023-06-08 01:00",
        end: "2023-06-08 5:00",
        title: "Test Title",
        color: "yellow",
    });
    const { start, end, title, color } = test;

    const getStartTime = new Date(start).getHours();
    const getEndTime = new Date(end).getHours();

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

    useEffect(() => {
        const formattedDate = searchParams.get("date");
        setDate(formattedDate);
    }, [location]);

    let isTitleRendered = false;

    return (
        <div className="dayTable">
            <div className="dayChanger">
                <div className="minusDay" onClick={dateMinusHandler}>
                    -
                </div>
                {date}
                <div className="plusDay" onClick={datePlusHandler}>
                    +
                </div>
            </div>
            {hours.map((hour, index) => {
                const startTime = new Date(start).getHours();
                const endTime = new Date(end).getHours();
                const hourSplit = hour.split(":");
                const hourValue = Number(hourSplit[0]);

                let backgroundColor = "";
                if (hourValue >= startTime && hourValue <= endTime) {
                    backgroundColor = color;
                }

                return (
                    <div key={hour} className="timeContainer">
                        <div className="timeSlot">{hour}</div>
                        <div className="timeBorder"></div>
                        {hourValue >= getStartTime &&
                        hourValue <= getEndTime ? (
                            <div
                                className={`otherContents ${
                                    hourValue === getStartTime && `first`
                                }`}
                                // style={{ backgroundColor }}
                            >
                                {hourValue === getStartTime &&
                                    !isTitleRendered && (
                                        <div className="title">{title}</div>
                                    )}
                            </div>
                        ) : (
                            <div className="contents"></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Seletime;
