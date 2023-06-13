import React from "react";
import { hours, days } from "../daily/time";
import "./weekly.scss";

function Weekly() {
    return (
        <div className="weekContainer">
            <div className="timetable">
                <div className="timetable__header">
                    {days.map((day, index) => (
                        <div className="timetable__day" key={index}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="timetable__body">
                    {hours.map((hour) => (
                        <div className="timetable__row" key={hour}>
                            {days.map((_, index) => (
                                <div className="timetable__cell" key={index} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Weekly;
