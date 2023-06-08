import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusD, minusD } from "../../../../../modules/module/repeatStart";
import "../../CardCompo/DaySelector.scss";

function Day() {
    const dispatch = useDispatch();
    const { year, month, day } = useSelector((state) => state.dateReducer);
    const outerRef = useRef(null);

    const increaseday = () => {
        dispatch(PlusD());
    };

    const decreaseday = () => {
        dispatch(minusD());
    };

    function getLastDayOfMonth(year, month) {
        const lastDay = new Date(year, month, 0).getDate();
        return lastDay;
    }

    useEffect(() => {
        const handleScroll = (event) => {
            const { target } = event;
            const isScrollable =
                target.scrollHeight > target.clientHeight &&
                (target === outerRef.current ||
                    target.contains(outerRef.current));

            if (event.deltaY < 0 && outerRef.current.contains(event.target)) {
                decreaseday();
            } else if (
                event.deltaY > 0 &&
                outerRef.current.contains(event.target)
            ) {
                increaseday();
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

    const lastDayOfMonth = getLastDayOfMonth(year, month);

    return (
        <div className="monthControll" ref={outerRef}>
            {parseInt(day) === 1 ? (
                <p>{lastDayOfMonth}</p>
            ) : (
                <p>{parseInt(day) - 1}</p>
            )}
            <p className="now">{Number(day)}</p>
            {parseInt(day) === lastDayOfMonth ? (
                <p>1</p>
            ) : (
                <p>{parseInt(day) + 1}</p>
            )}
        </div>
    );
}

export default Day;