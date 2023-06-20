import { useState, useEffect } from "react";
import { hours, days } from "../daily/time";
import { callData } from "./weekSever";
import Hour from "./Hour";
import "./weekly.scss";
import dayjs from "dayjs";

function Weekly() {
    const startDate = "2023-06-18";

    const dates = [];

    for (let i = 0; i < 7; i++) {
        let date = dayjs(startDate).add(1, "day");
        console.log(date);
    }

    const formattedDateTime = dayjs(startDate).format("YYYY-MM-DD HH:mm");
    const getDate = dayjs(startDate).format("DD");

    const dayOfWeek = dayjs(formattedDateTime).format("ddd");

    const [data, setData] = useState([
        {
            cardId: 15,
            start: "2023-06-01 01:00",
            end: "2023-06-01 05:00",
            title: "Test Title",
            color: "yellow",
            test: "Thu",
        },
        {
            cardId: 16,
            start: "2023-06-02 01:00",
            end: "2023-06-01 05:00",
            title: "Test Title",
            color: "yellow",
            test: "Fri",
        },
        {
            cardId: 17,
            start: "2023-06-03 01:00",
            end: "2023-06-03 05:00",
            title: "Test Title",
            color: "yellow",
        },
    ]);
    useEffect(() => {
        callData();
    }, []);

    return (
        <div className="weekContainer">
            <Hour />
            <div className="timetable">
                <div className="timetable__header">
                    {days.map((day, index) =>
                        day === "Sun" || day === "Sat" ? (
                            <div
                                style={{ color: "#FC9690" }}
                                className="timetable__day"
                                key={index}
                            >
                                {day}
                                {dayOfWeek === day && <p>{getDate}</p>}
                            </div>
                        ) : (
                            <div className="timetable__day" key={index}>
                                <p>{day}</p>
                                {dayOfWeek === day && <p>{getDate}</p>}
                            </div>
                        ),
                    )}
                </div>
                <div className="timetable__body">
                    {hours.map((hour) => (
                        <div className="timetable__row" key={hour}>
                            {days.map((day, index) => {
                                const findData = data.filter((item, index) => {
                                    const transStartHour = dayjs(
                                        item.start,
                                    ).format("HH:mm");
                                    const transEndHour = dayjs(item.end).format(
                                        "HH:mm",
                                    );

                                    return (
                                        transStartHour <= hour &&
                                        transEndHour > hour
                                    );
                                });

                                return (
                                    <div
                                        className="timetable__cell"
                                        key={day + hour}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Weekly;
