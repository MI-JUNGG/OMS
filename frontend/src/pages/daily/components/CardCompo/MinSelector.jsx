import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMin, minusMin } from "../../../../modules/module/date";
import "./Minselector.scss";

function MinSelector() {
    const outerRef = useRef(null);
    const dispatch = useDispatch();
    const { minute } = useSelector((state) => state.dateReducer);

    const increaseday = () => {
        dispatch(addMin());
    };

    const decreaseday = () => {
        dispatch(minusMin());
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
        <div className="minutes" ref={outerRef}>
            <span>{minute === 0 ? 59 : minute - 1}</span>
            <span>{minute}</span>
            <span>{minute === 59 ? 0 : minute + 1}</span>
        </div>
    );
}

export default MinSelector;
