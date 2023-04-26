import { useState } from "react";
import "./Main.scss";
import { useDispatch, useSelector } from "react-redux";
import { month } from "../modules/monthPicker";
import { year } from "../modules/year";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function Main() {
    const yearForm = useSelector((state) => state.yearReducer.value);
    const monthForm = useSelector((state) => state.monthReducer.month);
    const monthList = useSelector((state) => state.monthReducer.monthList);
    const dispatch = useDispatch();

    // console.log("year:", yearForm, "month:", monthForm);

    const date = new Date(yearForm, monthForm - 1);

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [];
    monthNames.push(monthList.map((value) => value + "월"));

    const handlePrevMonth = () => {
        if (monthForm === 1) {
            dispatch(month(12));
            dispatch(year(yearForm - 1));
        } else {
            dispatch(month(monthForm - 1));
        }
    };

    const handleNextMonth = () => {
        if (monthForm === 12) {
            dispatch(month(1));
            dispatch(year(yearForm + 1));
        } else {
            dispatch(month(monthForm + 1));
        }
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
                <AiOutlineLeft
                    className="prevBtn"
                    onClick={handlePrevMonth}
                    style={{
                        padding: "20px",
                        fontSize: "35px",
                        cursor: "pointer",
                    }}
                />

                <h1>
                    {date.getFullYear(yearForm) + "년"} {monthForm + "월"}
                </h1>
                <AiOutlineRight className="nextBtn" onClick={handleNextMonth} />
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
