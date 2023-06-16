import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTime, minusTime } from "../../../../modules/module/date";
import { eaddTime, eminusTime } from "../../../../modules/module/endDate";
import "./TimeSelector.scss";

function TimeSelector() {
    const outerRef = useRef(null);
    const dispatch = useDispatch();
    const isRepeat = useSelector((state) => state.modalReducer.endDateControl);
    const startTime = useSelector((state) => state.dateReducer.time);
    const endTime = useSelector((state) => state.endDateReducer.time);
    const time = isRepeat ? endTime : startTime;
    const increaseday = () => {
        isRepeat ? dispatch(eaddTime()) : dispatch(addTime());
    };

    const decreaseday = () => {
        isRepeat ? dispatch(eminusTime) : dispatch(minusTime());
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
        <div className="hour" ref={outerRef}>
            <p>{time === 1 || time - 1 === -1 ? 24 : time - 1}</p>
            <p className="now">{time}</p>
            <p>{time === 24 ? 1 : time + 1}</p>
        </div>
    );
}

export default TimeSelector;
