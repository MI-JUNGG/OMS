import React, { useEffect, useState } from "react";
import "./ColorPicker.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    handleBlockColorTheme,
    handleBlockColorThemeTitle,
} from "../../../../modules/module/setting";
import { isModal, isCustomPicker } from "../../../../modules/module/setting";
import { ChromePicker } from "react-color";
import {
    setCustomMainColor,
    setCustomBackgroundColor,
} from "../../../../modules/module/colorPicker";
import axios from "axios";

function ColorPicker(props) {
    const colorList = props.ColorList;
    const blockColorTheme = props.blockColorTheme;
    const blockColorThemeTitle = props.blockColorThemeTitle;
    const dispatch = useDispatch();

    const [colorSub, setColorSub] = useState({
        key: blockColorTheme,
        title: blockColorThemeTitle,
    });
    const [customId, setCustomId] = useState("");

    const customForm = useSelector(
        (state) => state.colorPickerReducer.color[5].custom,
    );
    // console.log(customForm);

    const changeCustomColor = () => {
        dispatch(
            setCustomMainColor({
                categoryId: 5, // index of the "custom" category in the color array
                customId: customId - 1, // subtract 1 to match the array index
                mainColor: color,
            }),
        );
        dispatch(
            setCustomBackgroundColor({
                categoryId: 5, // index of the "custom" category in the color array
                customId: customId - 1, // subtract 1 to match the array index
                backgroundColor: `${color}1A`,
            }),
        );
        dispatch(isCustomPicker(false));

        // axios.put("http://192.168.219.152:3001/mypage/color", {

        //             headers: {
        //                 Authorization: localStorage.getItem("token"),
        //             },
        //         data: {
        //             color1 : customForm[0].mainColor,
        //             color2 : customForm[1].mainColor,
        //             color3 : customForm[2].mainColor,
        //             color4 : customForm[3].mainColor,
        //             color5 : customForm[4].mainColor,
        //             color6 : customForm[5].mainColor,
        //             color7 : customForm[6].mainColor,
        //         }
        //         } )
        //         .then((response) => {
        //             console.log(response);
        //             setSchedule(response.data);
        //         })
    };

    const pickColorList = (key, title) => {
        setColorSub({ key: key, title: title });
    };

    const handleColorList = () => {
        dispatch(handleBlockColorTheme(colorSub.key));
        dispatch(handleBlockColorThemeTitle(colorSub.title));
        dispatch(isModal(false));
    };
    const isOnCustom = useSelector(
        (state) => state.settingReducer.isCustomPicker,
    );

    const [color, setColor] = useState("#ffffff"); // 초기 색상값 설정
    const handleChange = (selectedColor) => {
        setColor(selectedColor.hex);
    };
    const onCustom = () => {
        dispatch(isCustomPicker(true));
    };

    return (
        <>
            <div className="colorPickerWrapper">
                {isOnCustom === false ? (
                    <div className="colorPickerContainer">
                        <div className="colorTitle">
                            <span>
                                {colorList.length > 0 &&
                                    Object.keys(colorList[0])[0]}
                            </span>
                            <div
                                className={`${
                                    colorSub.title ===
                                    Object.keys(colorList[0])[0]
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
                                    colorSub.title ===
                                    Object.keys(colorList[1])[0]
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
                                    colorSub.title ===
                                    Object.keys(colorList[2])[0]
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
                                    colorSub.title ===
                                    Object.keys(colorList[3])[0]
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
                                    colorSub.title ===
                                    Object.keys(colorList[4])[0]
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
                        <div className="colorTitle">
                            <span>
                                {colorList.length > 0 &&
                                    Object.keys(colorList[5])[0]}
                            </span>
                            <div
                                className={`${
                                    colorSub.title ===
                                    Object.keys(colorList[5])[0]
                                        ? "selected"
                                        : "colorList"
                                } `}
                                onClick={() => {
                                    pickColorList(5, "custom");
                                }}
                            >
                                {colorList.length > 0 &&
                                    colorList[5].custom.map((data) => {
                                        return (
                                            <>
                                                <div
                                                    key={data.id}
                                                    className="customPaletteld"
                                                    style={{
                                                        backgroundColor: `${data.mainColor}`,
                                                    }}
                                                    onClick={() => {
                                                        if (
                                                            Object.values(
                                                                colorSub,
                                                            )[0] === 5
                                                        ) {
                                                            onCustom();
                                                        }
                                                        setCustomId(data.id);
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
                ) : (
                    <div
                        style={{
                            flexDirection: "column",
                            background: "#fff",
                            boxShadow:
                                "5px 5px 5px 5px rgba(168, 168, 168, 0.5)",
                            borderRadius: "1px",
                            position: "absolute",
                            top: "100px",
                            left: "10px",
                            // justifyContent: "center",
                            alignContent: "center",
                        }}
                    >
                        <ChromePicker
                            color={color}
                            onChange={handleChange}
                            disableAlpha={true}
                            styles={{
                                default: {
                                    picker: {
                                        // height: "300px",
                                        width: "246px",
                                        boxShadow: "none",
                                        padding: "15px",
                                        // borderRadius: "8px",
                                    },
                                    slider: {
                                        height: "300px",
                                    },
                                    swatch: {
                                        // padding: "5px",

                                        boxShadow: "none",
                                        display: "flex",
                                        cursor: "pointer",
                                        // width: "80px",
                                        // height: "80px",
                                    },

                                    hue: {
                                        boxShadow:
                                            "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                            }}
                        />
                        <div className="customPickerBtn">
                            <button
                                className="customPickerSelectBtn"
                                type="button"
                                onClick={changeCustomColor}
                            >
                                Select
                            </button>
                            <button
                                className="customPickerCancelBtn"
                                type="button"
                                onClick={() => {
                                    dispatch(isModal(false));
                                    dispatch(isCustomPicker(false));
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ColorPicker;

const PALELLE = [];
