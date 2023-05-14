import { useState } from "react";
import MonthSelector from "./MonthSelector";
import DaySelector from "./DaySelector";
import "./AlldayTime.scss";
import YearSelector from "./YearSelector";

function AlldayTime() {
    const [date, setDate] = useState({
        year: null,
        month: null,
        day: null,
    });
    console.log(date);

    const yearHandler = (date) => {
        setDate({ ...year, year: date });
    };

    return (
        <>
            <div className="yearPicker">
                <YearSelector yearHandler={yearHandler} />

                <MonthSelector />

                <DaySelector />
            </div>
            <button>com</button>
        </>
    );
}

export default AlldayTime;
