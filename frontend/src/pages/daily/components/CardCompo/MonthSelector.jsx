import { useState, useEffect, useRef } from "react";
import "./MonthSelector.scss";
import { useDispatch } from "react-redux";
import { addMonth } from "../../../../modules/module/date";

function MonthSelector({ monHandler }) {
    const dispatch = useDispatch();
    const formatDate = new Date();
    const mon = formatDate.getMonth() + 1;
    const [month, setMonth] = useState(mon);
    const outerRef = useRef(null);

    const increaseMon = () => {
        formatDate.setMonth(formatDate.getMonth() + 1);
        const newMon = String(formatDate.getMonth() + 1).padStart(2, "0");
        setMonth(Number(newMon));
    };

    const decreaseMon = () => {
        formatDate.setMonth(formatDate.getMonth() - 1);
        const newMon = String(formatDate.getMonth() + 1).padStart(2, "0");
        setMonth(Number(newMon));
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
    useEffect(() => {
        dispatch(addMonth(Number(month)));
    }, [month]);
    return (
        <div className="monthControll" ref={outerRef}>
            {Number(month) - 1 === 0 ? <p>12</p> : <p>{Number(month) - 1}</p>}
            <p>{Number(month)}</p>
            {Number(month) + 1 === 13 ? <p>1</p> : <p>{Number(month) + 1}</p>}
        </div>
    );
}

export default MonthSelector;
