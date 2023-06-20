import React from "react";
import "./Btn.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function Buttons() {
    const form = useSelector((state) => state.temporaryColorReducer);
    // console.log(form.temporaryBlockColor.mainColor);
    const colorPaletteld = useSelector((state) => state.colorPickerReducer);
    // console.log(colorPaletteld);

    const settingSub = () => {
        axios
            .put("http://192.168.219.152:3001/mypage/color", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
                data: {
                    mainColor: form.temporaryMainColor,
                    backgroundColor: form.temporaryBackgroundColor,
                    textStyle: form.temporaryTextStyle,
                    textColor: form.temporaryTextColor,
                    colorPaletteld: form.temporaryBlockColor.mainColor,
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="btnContainer">
                <button type="button" onClick={settingSub}>
                    Save
                </button>
                <button type="button">Default</button>
            </div>
        </>
    );
}

export default Buttons;
