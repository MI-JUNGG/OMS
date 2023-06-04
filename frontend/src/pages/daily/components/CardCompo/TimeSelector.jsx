import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addTime,
    minusTime,
    addMin,
    minusMin,
} from "../../../../modules/module/date";
import MinSelector from "./MinSelector";
import "./TimeSelector.scss";

function TimeSelector() {
    const outerRef = useRef(null);
    const dispatch = useDispatch();
    const { time } = useSelector((state) => state.dateReducer);

    const increaseday = () => {
        dispatch(addTime());
    };

    const decreaseday = () => {
        dispatch(minusTime());
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
        <div className="timeWapper">
            <div className="hour" ref={outerRef}>
                <span>{time === 1 ? 24 : time - 1}:</span>
                <span>{time}:</span>
                <span>{time === 24 ? 1 : time + 1}:</span>
            </div>

            <MinSelector />
        </div>
    );
}

export default TimeSelector;
