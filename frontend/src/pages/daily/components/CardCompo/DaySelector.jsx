import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusD, minusD } from "../../../../modules/module/date";

function DaySelector() {
    const dispatch = useDispatch();
    const day = useSelector((state) => state.dateReducer.day);
    const outerRef = useRef(null);

    const increaseday = () => {
        dispatch(PlusD());
    };

    const decreaseday = () => {
        dispatch(minusD());
    };

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

    return (
        <div className="monthControll" ref={outerRef}>
            {parseInt(day) === 1 ? (
                <p>{Number(day)}</p>
            ) : (
                <p>{parseInt(day) - 1}</p>
            )}
            <p>{Number(day)}</p>
            <p>{parseInt(day) + 1}</p>
        </div>
    );
}

export default DaySelector;
