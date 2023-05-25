import React from "react";
import AllDaySelectedTime from "./CardCompo/AllDaySelectedTime";
import { useDispatch } from "react-redux";
import { dateControl } from "../../../modules/module/modal";
import DateType from "./CardCompo/DateType";
import "./All.scss";

function All() {
    const dispatch = useDispatch();
    const modalHandler = () => {
        dispatch(dateControl());
    };
    return (
        <div className="flex">
            <AllDaySelectedTime />
            <DateType />
        </div>
    );
}

export default All;
