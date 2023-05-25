import React from "react";
import { useSelector } from "react-redux";

import DateRight from "../../../../assets/images/date_picker/DateRight";
import DateType from "../CardCompo/DateType";
import "../All.scss";

function Repeat() {
    const { month, day, time, minute } = useSelector((state) => {
        return state.dateReducer;
    });

    const endMonth = useSelector((state) => state.endDateReducer.month);
    const endDay = useSelector((state) => state.endDateReducer.day);
    const endMinute = useSelector((state) => state.endDateReducer.minute);
    const endTime = useSelector((state) => state.endDateReducer.time);

    return (
        <div className="flex">
            <div>
                <div>
                    <span>{month}월</span>
                    <span>{day}일</span>
                </div>
                <span>
                    {time} : {minute}
                </span>
            </div>
            <DateRight />
            <div>
                <div>
                    <span>{endMonth}월</span>
                    <span>{endDay}일</span>
                </div>
                <span>
                    {endTime} : {endMinute}
                </span>
            </div>

            <DateType />
        </div>
    );
}

export default Repeat;
