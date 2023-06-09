import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ePlusD, eminusD } from "../../../../../modules/module/endDate.js";
import "../DaySelector.scss";

function DaySelector() {
    const dispatch = useDispatch();
    const { year, month, day } = useSelector((state) => state.endDateReducer);
    const outerRef = useRef(null);

    const increaseday = () => {
        dispatch(ePlusD());
    };

    const decreaseday = () => {
        dispatch(eminusD());
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
    const DAY = String(parseInt(day)).padStart(2, "0");
    const DAYPlus = String(parseInt(day) + 1).padStart(2, "0");
    const DAYMius = String(parseInt(day) - 1).padStart(2, "0");

    return (
        <div className="monthControll" ref={outerRef}>
            {parseInt(day) === 1 ? <p>{lastDayOfMonth}</p> : <p>{DAYMius}</p>}
            <p className="now">{DAY}</p>
            {parseInt(day) === lastDayOfMonth ? <p>01</p> : <p>{DAYPlus}</p>}
        </div>
    );
}

export default DaySelector;
