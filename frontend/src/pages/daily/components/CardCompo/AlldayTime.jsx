import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MonthSelector from "./MonthSelector";
import DaySelector from "./DaySelector";
import "./AlldayTime.scss";
import YearSelector from "./YearSelector";
import { addDate, addDay, addMonth } from "../../../../modules/module/date";

function AlldayTime() {
    const dispatch = useDispatch();

    const form = useSelector((state) => state.dateReducer);
    console.log(form);
    const [date, setDate] = useState({
        year: null,
        month: null,
        day: null,
    });

    const yearHandler = (data) => {
        setDate({ ...date, year: data });
    };
    const monHandler = (data) => {
        setDate({ ...date, month: data });
    };

    const dayHandler = (data) => {
        setDate({ ...date, day: data });
    };

    return (
        <>
            <div className="yearPicker">
                <YearSelector yearHandler={yearHandler} />

                <MonthSelector monHandler={monHandler} />

                <DaySelector dayHandler={dayHandler} />
            </div>
            <button>com</button>
        </>
    );
}

export default AlldayTime;
