import { useState } from "react";

function Button() {
    const [isopen, setIsopen] = useState(false);
    const openModal = () => {
        setIsopen((prev) => !prev);
    };
    return <div onClick={openModal}>+</div>;
}

export default Button;
