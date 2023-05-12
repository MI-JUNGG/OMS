import React, { useState, useRef, useEffect } from "react";
import MonthSelector from "./MonthSelector";
import DaySelector from "./DaySelector";
import "./AlldayTime.scss";

function AlldayTime() {
    const formatDate = new Date();
    const newYear = formatDate.getFullYear();
    const mon = formatDate.getMonth() + 1;
    const day = formatDate.getDate() + 1;

    const [dateTime, setDateTime] = useState({
        year: newYear,
        month: mon,
        date: day,
    });
    const { year, month, date } = dateTime;
    const outerRef = useRef(null);

    const increaseYear = () => {
        setDateTime((prevDateTime) => ({
            ...prevDateTime,
            year: prevDateTime.year + 1,
        }));
    };

    const decreaseYear = () => {
        setDateTime((prevDateTime) => ({
            ...prevDateTime,
            year: prevDateTime.year - 1,
        }));
        console.log("1 minus");
    };

    useEffect(() => {
        const handleScroll = (event) => {
            const { target } = event;
            const isScrollable =
                target.scrollHeight > target.clientHeight &&
                (target === outerRef.current ||
                    target.contains(outerRef.current));

            if (event.deltaY < 0 && outerRef.current.contains(event.target)) {
                decreaseYear();
            } else if (
                event.deltaY > 0 &&
                outerRef.current.contains(event.target)
            ) {
                increaseYear();
            }

            if (!isScrollable || !outerRef.current.contains(event.target)) {
                event.preventDefault();
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="yearPicker">
            <div ref={outerRef} className="yearControll">
                <span>{year - 1}년</span>
                <span>{year}년</span>
                <span>{year + 1}년</span>
            </div>
            <div className="monthControll">
                <MonthSelector />
            </div>
            <div className="dayControll">
                <DaySelector />
            </div>
        </div>
    );
}

export default AlldayTime;
