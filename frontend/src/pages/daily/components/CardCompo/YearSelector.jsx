import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addDate } from "../../../../modules/module/date";

function YearSelector({ yearHandler }) {
    const dispatch = useDispatch();
    const formatDate = new Date();
    const newYear = formatDate.getFullYear();
    const mon = formatDate.getMonth() + 1;
    const day = formatDate.getDate() + 1;

    const [year, setYear] = useState(newYear);
    const outerRef = useRef(null);

    const increaseYear = () => {
        setYear((prevYear) => prevYear + 1);
    };

    const decreaseYear = () => {
        setYear((prevYear) => prevYear - 1);
    };

    useEffect(() => {
        const handleScroll = (event) => {
            const { target } = event;
            const isScrollable =
                target.scrollHeight > target.clientHeight &&
                (target === outerRef.current ||
                    target.contains(outerRef.current));

            if (event.deltaY < 0 && outerRef.current.contains(event.target)) {
                decreaseYear();
            } else if (
                event.deltaY > 0 &&
                outerRef.current.contains(event.target)
            ) {
                increaseYear();
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
        yearHandler(year);
        dispatch(addDate(Number(year)));
    }, [year]);

    return (
        <div>
            <div ref={outerRef} className="yearControll">
                <p>{year - 1}</p>
                <p>{year}</p>
                <p>{year + 1}</p>
            </div>
        </div>
    );
}

export default YearSelector;
