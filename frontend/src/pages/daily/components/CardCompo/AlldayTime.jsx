import React, { useState } from "react";

function AlldayTime() {
    const [dateTime, setDateTime] = useState(new Date());

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newDateTime = new Date(dateTime);

        if (name === "year") {
            newDateTime.setFullYear(value);
        } else if (name === "month") {
            newDateTime.setMonth(value - 1);
        } else if (name === "time") {
            const [hours, minutes] = value.split(":");
            newDateTime.setHours(hours);
            newDateTime.setMinutes(minutes);
        }

        setDateTime(newDateTime);
    };

    return (
        <div className="carousel">
            <input type="datetime-local" />
        </div>
    );
}

export default AlldayTime;
