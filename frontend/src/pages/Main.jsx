import { useState } from "react";
import "./Main.scss";

function Main() {
    const [date, setDate] = useState(new Date());

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handlePrevMonth = () => {
        setDate((prevDate) => {
            return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
        });
    };

    const handleNextMonth = () => {
        setDate((prevDate) => {
            return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
        });
    };

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const renderDays = () => {
        const days = [];
        const daysCount = daysInMonth(date.getFullYear(), date.getMonth());
        const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty"></div>);
        }

        for (let i = 1; i <= daysCount; i++) {
            days.push(
                <div key={`day-${i}`} className="day">
                    {i}
                </div>,
            );
        }

        return days;
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={handlePrevMonth}>Prev</button>
                <h1>
                    {monthNames[date.getMonth()]} {date.getFullYear()}
                </h1>
                <button onClick={handleNextMonth}>Next</button>
            </div>
            <div className="weekdays">
                {weekdays.map((weekday) => (
                    <div key={weekday} className="weekday">
                        {weekday}
                    </div>
                ))}
            </div>
            <div className="days">{renderDays()}</div>
        </div>
    );
}

export default Main;
