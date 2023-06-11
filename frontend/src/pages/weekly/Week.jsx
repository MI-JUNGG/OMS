import React from "react";
import { hours, week } from "../daily/time";
import "./weekly.scss";

function Weekly() {
    return (
        <table className="timetable">
            <thead>
                <tr>
                    <th></th>
                    {week.map((day) => (
                        <th key={day}>{day}</th>
                    ))}
                </tr>
                <tr className="timetable-hours">
                    <td></td>
                    {week.map(() => (
                        <td></td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {hours.map((hour) => (
                    <tr key={hour}>
                        <td>{hour}</td>
                        {week.map(() => (
                            <td></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Weekly;
