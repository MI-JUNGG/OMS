import React from "react";
import "./colorCss/ColorSelector.scss";
import ModalPlus from "../../../../assets/images/modal/ModalPlus";

function ColorSelector() {
    const renderColor = Array(6)
        .fill()
        .map((_, index) => <div key={index} className="circle"></div>);

    return (
        <div className="colorBox">
            {renderColor}
            <div>
                <ModalPlus />
            </div>
        </div>
    );
}

export default ColorSelector;
