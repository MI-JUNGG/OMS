import React, { useState } from "react";
import "./ColorPicker.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    handleBlockColorTheme,
    handleBlockColorThemeTitle,
} from "../../../../modules/module/setting";
import { isModal } from "../../../../modules/module/setting";

function ColorPicker(props) {
    const colorList = props.ColorList;
    const blockColorTheme = props.blockColorTheme;
    const blockColorThemeTitle = props.blockColorThemeTitle;
    const dispatch = useDispatch();

    const form = useSelector((state) => state.settingReducer);

    const [colorSub, setColorSub] = useState({
        key: blockColorTheme,
        title: blockColorThemeTitle,
    });

    const pickColorList = (key, title) => {
        setColorSub({ key: key, title: title });
    };

    const handleColorList = () => {
        dispatch(handleBlockColorTheme(colorSub.key));
        dispatch(handleBlockColorThemeTitle(colorSub.title));
        dispatch(isModal(false));
    };
    return (
        <>
            <div className="colorPickerWrapper">
                <div className="colorPickerContainer">
                    <div className="colorTitle">
                        <span>
                            {colorList.length > 0 &&
                                Object.keys(colorList[0])[0]}
                        </span>
                        <div
                            className={`${
                                colorSub.title === Object.keys(colorList[0])[0]
                                    ? "selected"
                                    : "colorList"
                            } `}
                            onClick={() => {
                                pickColorList(0, "vivid");
                            }}
                        >
                            {colorList.length > 0 &&
                                colorList[0].vivid.map((data) => {
                                    return (
                                        <>
                                            <div
                                                className="colorOfColorList"
                                                style={{
                                                    backgroundColor: `${data.mainColor}`,
                                                }}
                                            />
                                        </>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="colorTitle">
                        <span>
                            {colorList.length > 0 &&
                                Object.keys(colorList[1])[0]}
                        </span>
                        <div
                            className={`${
                                colorSub.title === Object.keys(colorList[1])[0]
                                    ? "selected"
                                    : "colorList"
                            } `}
                            onClick={() => {
                                pickColorList(1, "bright");
                            }}
                        >
                            {colorList.length > 0 &&
                                colorList[1].bright.map((data) => {
                                    return (
                                        <>
                                            <div
                                                className="colorOfColorList"
                                                style={{
                                                    backgroundColor: `${data.mainColor}`,
                                                }}
                                            />
                                        </>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="colorTitle">
                        <span>
                            {colorList.length > 0 &&
                                Object.keys(colorList[2])[0]}
                        </span>
                        <div
                            className={`${
                                colorSub.title === Object.keys(colorList[2])[0]
                                    ? "selected"
                                    : "colorList"
                            } `}
                            onClick={() => {
                                pickColorList(2, "soft");
                            }}
                        >
                            {colorList.length > 0 &&
                                colorList[2].soft.map((data) => {
                                    return (
                                        <>
                                            <div
                                                className="colorOfColorList"
                                                style={{
                                                    backgroundColor: `${data.mainColor}`,
                                                }}
                                            />
                                        </>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="colorTitle">
                        <span>
                            {colorList.length > 0 &&
                                Object.keys(colorList[3])[0]}
                        </span>
                        <div
                            className={`${
                                colorSub.title === Object.keys(colorList[3])[0]
                                    ? "selected"
                                    : "colorList"
                            } `}
                            onClick={() => {
                                pickColorList(3, "reddish");
                            }}
                        >
                            {colorList.length > 0 &&
                                colorList[3].reddish.map((data) => {
                                    return (
                                        <>
                                            <div
                                                className="colorOfColorList"
                                                style={{
                                                    backgroundColor: `${data.mainColor}`,
                                                }}
                                            />
                                        </>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="colorTitle">
                        <span>
                            {colorList.length > 0 &&
                                Object.keys(colorList[4])[0]}
                        </span>
                        <div
                            className={`${
                                colorSub.title === Object.keys(colorList[4])[0]
                                    ? "selected"
                                    : "colorList"
                            } `}
                            onClick={() => {
                                pickColorList(4, "pale");
                            }}
                        >
                            {colorList.length > 0 &&
                                colorList[4].pale.map((data) => {
                                    return (
                                        <>
                                            <div
                                                className="colorOfColorList"
                                                style={{
                                                    backgroundColor: `${data.mainColor}`,
                                                }}
                                            />
                                        </>
                                    );
                                })}
                        </div>
                    </div>
                    <button
                        className="colorPickerBtn"
                        type="button"
                        onClick={handleColorList}
                    >
                        Select
                    </button>
                </div>
            </div>
        </>
    );
}

export default ColorPicker;

const PALELLE = [];
