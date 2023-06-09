import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { hours } from "../time";
import DateLeft from "../../../assets/images/date_picker/DateLeft";
import DateRight from "../../../assets/images/date_picker/DateRight";
import "./Selectime.scss";

function Selectime() {
    const location = useLocation();
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get("date");
    const formatDate = dayjs(day);
    const returnDate = formatDate.format("YYYY.MM.DD"); // 날짜 형식을 "YYYY.MM.DD"로 변경
    console.log(returnDate);
    const [date, setDate] = useState(returnDate);
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

    // useEffect(() => {
    //     const formattedDate = searchParams.get("date");
    //     setDate(formattedDate);
    // }, [location]);

    let isTitleRendered = false;

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

export default Selectime;
