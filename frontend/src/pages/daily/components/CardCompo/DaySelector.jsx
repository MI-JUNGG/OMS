import { useState, useEffect, useRef } from "react";

function DaySelector() {
    const formatDate = new Date();
    const date = formatDate.getDate() + 1;
    const [day, setDay] = useState(date);
    const outerRef = useRef(null);

    const increaseday = () => {
        const lastDay = new Date(
            formatDate.getFullYear(),
            formatDate.getMonth() + 1,
            0,
        ).getDate();
        formatDate.setDate(formatDate.getDate() + 1);
        const newDay =
            formatDate.getDate() <= lastDay ? formatDate.getDate() : 1;
        setDay(String(newDay).padStart(2, "0"));
    };

    const decreaseday = () => {
        const lastDay = new Date(
            formatDate.getFullYear(),
            formatDate.getMonth(),
            0,
        ).getDate();
        formatDate.setDate(formatDate.getDate() - 1);
        const newDay =
            formatDate.getDate() >= 1 ? formatDate.getDate() : lastDay;
        setDay(String(newDay).padStart(2, "0"));
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
