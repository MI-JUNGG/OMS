import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ePlusM, eminusM } from "../../../../../modules/module/repeatEnd";
// import "../MonthSelector.scss";
function EndMonth() {
    const dispatch = useDispatch();
    const outerRef = useRef(null);
    const month = useSelector((state) => state.endDateReducer.month);

    const increaseMon = () => {
        dispatch(ePlusM());
    };

    const decreaseMon = () => {
        dispatch(eminusM());
    };

    useEffect(() => {
        const handleScroll = (event) => {
            const { target } = event;
            const isScrollable =
                target.scrollHeight > target.clientHeight &&
                (target === outerRef.current ||
                    target.contains(outerRef.current));

            if (event.deltaY < 0 && outerRef.current.contains(event.target)) {
                decreaseMon();
            } else if (
                event.deltaY > 0 &&
                outerRef.current.contains(event.target)
            ) {
                increaseMon();
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
            {Number(month) - 1 === 0 ? <p>12</p> : <p>{Number(month) - 1}</p>}
            <p className="now">{Number(month)}</p>
            {Number(month) + 1 === 13 ? <p>1</p> : <p>{Number(month) + 1}</p>}
        </div>
    );
}

export default EndMonth;
