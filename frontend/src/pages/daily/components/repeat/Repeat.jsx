// Repeat.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    dateControl,
    endDateControl,
    repeatControl,
} from "../../../../modules/module/modal";
import DateRight from "../../../../assets/images/date_picker/DateRight";
import DateType from "../CardCompo/DateType";
import "../All.scss";

function Repeat() {
    const dispatch = useDispatch();

    const { month, day, time, minute } = useSelector((state) => {
        return state.dateReducer;
    });

    const endMonth = useSelector((state) => state.endDateReducer.month);
    const endDay = useSelector((state) => state.endDateReducer.day);
    const endMinute = useSelector((state) => state.endDateReducer.minute);
    const endTime = useSelector((state) => state.endDateReducer.time);

    const modalHandler = () => {
        dispatch(dateControl());
    };

    const endModalHandler = () => {
        dispatch(endDateControl());
    };

    return (
        <div className="flex">
            <div onClick={modalHandler}>
                <div>
                    <span>{month}월</span>
                    <span>{day}일</span>
                </div>
                <span>
                    {time} : {minute}
                </span>
            </div>
            <DateRight />
            <div onClick={endModalHandler}>
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