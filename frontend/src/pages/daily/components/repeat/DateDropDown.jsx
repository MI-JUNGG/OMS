import { useState } from "react";
import { valueSelector } from "../../../../modules/module/Limit";
import { useDispatch } from "react-redux";
import "./DateDropDown.scss";

function DateDropDown({ showModal }) {
    const repeat = ["매일", "매주", "매달", "매년"];
    const dispatch = useDispatch();
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const clickHandler = (index) => {
        dispatch(valueSelector(repeat[index]));
        setSelectedItemIndex(index);
        console.log(index);
        showModal();
    };

    return (
        <ul className="selectDrop">
            {repeat.map((item, index) => (
                <li
                    key={item}
                    onClick={() => clickHandler(index)}
                    className={`option ${
                        selectedItemIndex === index ? "selected" : ""
                    }`}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default DateDropDown;
