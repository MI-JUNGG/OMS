import React from "react";
import YearSelector from "./YearSelector";
import DaySelector from "./DaySelector";

function PartTime() {
    return (
        <div>
            <YearSelector endDateReducer={endDateReducer} />
            <MonthSelector />
            <DaySelector />
            <TimeSelector />
        </div>
    );
}

export default PartTime;
