import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusM, PlusM } from "../../../../../modules/module/repeatStart";
import "../../CardCompo/MonthSelector.scss";

function Month({ monHandler }) {
    const dispatch = useDispatch();
    const outerRef = useRef(null);
    const month = useSelector((state) => state.dateReducer.month);

    const increaseMon = () => {
        dispatch(PlusM());
    };

    const decreaseMon = () => {
        dispatch(minusM());
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

export default Month;