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

    const repeatArray = Array.from({ length: 50 }, (_, index) => index + 1);
    const increase = () => {
        setYear(year + 1);
    };

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        };
    }, []);

    return (
        <div className="yearPicker">
            <button onClick={increase}>up</button>
            <span>{year - 1}년</span>
            <span>{year}년</span>
            <span>{year + 1}년</span>
        </div>
    );
}

export default AlldayTime;
