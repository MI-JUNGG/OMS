import React, { useState, useRef, useEffect } from "react";
import "./AlldayTime.scss";

function AlldayTime() {
    const [scroll, setScroll] = useState(false);
    const [dateTime, setDateTime] = useState(new Date());
    const formatDate = new Date();
    const Newyear = formatDate.getFullYear();
    const month = String(formatDate.getMonth() + 1).padStart(2, "0");
    const day = String(formatDate.getDate()).padStart(2, "0");
    const [year, setYear] = useState(Newyear);
    const outerRef = useRef(null);

    const increase = () => {
        setYear(year + 1);
    };

    useEffect(() => {
        const handleScroll = (event) => {
            const { deltaY } = event;
            if (deltaY < 0) {
                setYear((prev) => prev - 1);
            } else if (deltaY > 0) {
                setYear((prev) => prev + 1);
            }
        };

        outerRef.current.addEventListener("wheel", handleScroll);

        return () => {
            outerRef.current.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="yearPicker" ref={outerRef}>
            <button onClick={increase}>up</button>
            <span>{year - 1}년</span>
            <span>{year}년</span>
            <span>{year + 1}년</span>
        </div>
    );
}

export default AlldayTime;
