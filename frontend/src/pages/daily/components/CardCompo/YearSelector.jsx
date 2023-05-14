import { useState, useEffect, useRef } from "react";

function YearSelector({ yearHandler }) {
    const formatDate = new Date();
    const newYear = formatDate.getFullYear();
    const mon = formatDate.getMonth() + 1;
    const day = formatDate.getDate() + 1;

    const [date, setDateTime] = useState({
        year: newYear,
        month: mon,
        date: day,
    });
    const { year, month, date } = dateTime;
    const outerRef = useRef(null);

    const increaseYear = () => {
        setDateTime((prevDateTime) => ({
            ...prevDateTime,
            year: prevDateTime.year + 1,
        }));
    };

    const decreaseYear = () => {
        setDateTime((prevDateTime) => ({
            ...prevDateTime,
            year: prevDateTime.year - 1,
        }));
        console.log("1 minus");
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
