import { useEffect, useState } from "react";
import "./TextSelector.scss";
import { useDispatch, useSelector } from "react-redux";
import ModalPlus from "/src/assets/images/modal/ModalPlus";
import { isModal } from "../../../../modules/module/setting";
import ColorPicker from "./ColorPicker";
import ColorPickerBackground from "./ColorPickerBackground";

function TextSelector() {
    const dispatch = useDispatch();
    const ismodal = useSelector((state) => state.settingReducer.isModal);
    const handleOutClick = () => {
        dispatch(isModal());
    };
    const blockColorTheme = useSelector(
        (state) => state.settingReducer.blockColorTheme,
    );
    const blockColorThemeTitle = useSelector(
        (state) => state.settingReducer.blockColorThemeTitle,
    );
    console.log(blockColorTheme, blockColorThemeTitle);

    const [blockColor, setBlockColor] = useState([]);
    useEffect(() => {
        fetch("/data/blockColor.json")
            .then((data) => data.json())
            .then((data) => setBlockColor(data));
    }, []);

    return (
        <>
            <div className="textSelectorContainer">
                <div className="textSelectorZone">
                    <div className="textStyleSelectZone">
                        <h3>Text Style</h3>
                        <div className="textStyleSelect">
                            {TEXT_STYLE.map((style, i) => {
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            fontSize: style.fontSize,
                                            fontStyle: style.style,
                                            textDecoration: style.style,
                                        }}
                                    >
                                        {style.style}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="textColorSelectZone">
                        <h3>Text Color</h3>
                        <div className="textColorSelect">
                            {TEXT_COLOR.map((color, i) => {
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
                                blockColor[blockColorTheme][
                                    blockColorThemeTitle
                                ]?.map((data, i) => {
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
                            <div className="moreColor" onClick={handleOutClick}>
                                <ModalPlus />
                            </div>
                            {ismodal === true && (
                                <>
                                    <ColorPicker
                                        ColorList={blockColor}
                                        blockColorTheme={blockColorTheme}
                                        blockColorThemeTitle={
                                            blockColorThemeTitle
                                        }
                                    />
                                    <ColorPickerBackground
                                        onClick={handleOutClick}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="textPreviewContainer">
                    <div className="textPreview">
                        <div className="textPreviewCard_1">⚽ Schedule</div>
                        <div className="textPreviewCard_2">⚽ Schedule</div>
                        <div className="textPreviewCard_3">⚽ Schedule</div>
                    </div>
                </div>
            </div>
            <div />
        </>
    );
}

export default TextSelector;

const TEXT_STYLE = [
    {
        id: 1,
        style: "Regular",
        fontSize: "14px",
    },
    {
        id: 2,
        style: "Bold",
        fontSize: "20px",
    },
    {
        id: 3,
        style: "Italic",
        fontSize: "19px",
    },
    {
        id: 4,
        style: "underline",
        fontSize: "15px",
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
