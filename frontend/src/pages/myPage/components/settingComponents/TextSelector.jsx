import { useEffect, useState } from "react";
import "./TextSelector.scss";
import { useDispatch, useSelector } from "react-redux";
import settingPlus from "/src/assets/images/setting/setting_plus.svg";

function TextSelector() {
    useEffect(() => {
        fetch("/data/blockColor.json")
            .then((data) => data.json())
            .then((data) => setBlockColor(data));
    }, []);
    const dispatch = useDispatch();
    const settingReducer = useSelector((state) => state.settingReducer);

    const [blockColor, setBlockColor] = useState([]);
    console.log(blockColor);

    return (
        <>
            <div className="textSelectorContainer">
                <div className="textSelectorZone">
                    <div className="textStyleSelectZone">
                        <h3>Text Style</h3>
                        <div className="textStyleSelect">
                            {TEXT_STYLE.map((style, i) => {
                                return <div key={i}>{style.style} </div>;
                            })}
                        </div>
                    </div>
                    <div className="textColorSelectZone">
                        <h3>Text Color</h3>
                        <div className="textColorSelect">
                            {TEXT_COLOR.map((color, i) => {
                                console.log(color);
                                return (
                                    <div key={i} className="textColor">
                                        <div
                                            className={`textColor${color.color}`}
                                        >
                                            <span>{color.color}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="blockColorSelctZone">
                        <h3>Block Color</h3>
                        <div className="blockColorSelect">
                            {blockColor.length > 0 &&
                                blockColor[1].bright.map((data, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="blockColorVivid"
                                            style={{
                                                backgroundColor: `${data.mainColor}`,
                                            }}
                                        ></div>
                                    );
                                })}
                            <svg xmlns="http://www.w3.org/2000/svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="textPreview"></div>

            <div />
        </>
    );
}

export default TextSelector;

const TEXT_STYLE = [
    {
        id: 1,
        style: "Regular",
    },
    {
        id: 2,
        style: "Bold",
    },
    {
        id: 3,
        style: "Italic",
    },
    {
        id: 4,
        style: "under line",
    },
];

const TEXT_COLOR = [
    {
        id: 1,
        color: "Dark",
    },
    {
        id: 2,
        color: "Colored",
    },
];
