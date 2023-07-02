import { useEffect, useState } from "react";
import "./Main.scss";
import { useDispatch, useSelector } from "react-redux";
import { month } from "../modules/module/monthPicker";
import { year } from "../modules/module/year";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import {
    background,
    handleBlockColorTheme,
    handleBlockColorThemeTitle,
    main,
    textColor,
    textStyle,
} from "../modules/module/setting";
import {
    setCustomMainColor,
    setCustomBackgroundColor,
} from "../modules/module/colorPicker";
import Button from "./button/Button";
import { addCard } from "../modules/module/card";
import { useNavigate, useLocation } from "react-router";
import {
    temporaryMainColor,
    temporaryBackgroundColor,
    temporaryTextColor,
    temporaryTextStyle,
    temporaryBlockColorTheme,
    temporaryBlockColorThemeTitle,
} from "../modules/module/temporaryColorSetting";
import LoginModalBackground from "./sign/LoginModalBackground";
import dayjs from "dayjs";

function Main() {
    const yearForm = useSelector((state) => state.yearReducer.value);
    const monthForm = useSelector((state) => state.monthReducer.month);
    const monthList = useSelector((state) => state.monthReducer.monthList);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const date = new Date(yearForm, monthForm - 1);

    const setting = useSelector((state) => state.settingReducer);

    const monthScheduleData = useSelector((state) => state.cardReducer.month);

    const [backgroundState, setBackgroundState] = useState(false);
    const backgroundStateHandler = () => {
        setBackgroundState(!backgroundState);
    };

    const pickTitle = (id) => {
        switch (id) {
            case 0:
                return "vivid";
            case 1:
                return "bright";
            case 2:
                return "soft";
            case 3:
                return "reddish";
            case 4:
                return "pale";
            case 5:
                return "custom";
            default:
                return "";
        }
    };

    useEffect(() => {
        const startDate = `${yearForm}-${monthForm}-01`;
        const endDate = `${yearForm}-${monthForm}-${daysInMonth(
            yearForm,
            monthForm - 1,
        )}`;

        axios
            .get("/data/monthMock.json", {
                params: {
                    startDate: startDate,
                    endDate: endDate,
                },
                headers: {
                    // Authorization: localStorage.getItem("token"),
                    Authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE2ODc5MjA1NjJ9.rKtSAN2iGVWKkYZoTLRvzZ1kG-CVZ7P0WeS0O4TzX4k",
                },
            })
            .then((response) => {
                console.log(response);
                dispatch(
                    handleBlockColorTheme(
                        response.data.palette[0].colorPaletteId,
                    ),
                );

                const customColors = response.data.palette[0];
                const monthSchedule = response.data.monthCard;

                dispatch(
                    addCard({ cardType: "month", cardData: monthSchedule }),
                );

                customColors &&
                    customColors.colorPaletteId === 6 &&
                    Object.keys(customColors).forEach((key) => {
                        if (
                            key.startsWith("color") &&
                            key !== "colorPaletteId"
                        ) {
                            const colorNumber = parseInt(
                                key.replace("color", ""),
                            );
                            const customId = colorNumber - 1;
                            const mainColor = customColors[key];

                            dispatch(
                                setCustomMainColor({
                                    categoryId: 5,
                                    customId: customId,
                                    mainColor: mainColor,
                                }),
                            );
                            dispatch(
                                setCustomBackgroundColor({
                                    categoryId: 5,
                                    customId: customId,
                                    backgroundColor:
                                        mainColor !== null
                                            ? `${mainColor}1A`
                                            : null,
                                }),
                            );
                        } else {
                            dispatch(
                                temporaryBlockColorTheme(
                                    customColors.colorPaletteId - 1,
                                ),
                            );
                            dispatch(
                                handleBlockColorTheme(
                                    customColors.colorPaletteId - 1,
                                ),
                            );

                            dispatch(
                                temporaryBlockColorThemeTitle(
                                    pickTitle(customColors.colorPaletteId - 1),
                                ),
                            );
                            dispatch(
                                handleBlockColorThemeTitle(
                                    pickTitle(customColors.colorPaletteId - 1),
                                ),
                            );
                        }
                    });
            })
            .catch((err) => console.log(err));

        // axios
        //     .get("http://192.168.219.152:3001/month", {
        //         params: {
        //             startDate: startDate,
        //             endDate: endDate,
        //         },
        //         headers: {
        //             Authorization: localStorage.getItem("token"),
        //         },
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         setSchedule(response.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }, [monthForm]);

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [];
    monthNames.push(monthList.map((value) => value + "월"));

    const handlePrevMonth = () => {
        if (monthForm === 1) {
            dispatch(month(12));
            dispatch(year(yearForm - 1));
        } else {
            dispatch(month(monthForm - 1));
        }
    };

    const handleNextMonth = () => {
        if (monthForm === 12) {
            dispatch(month(1));
            dispatch(year(yearForm + 1));
        } else {
            dispatch(month(monthForm + 1));
        }
    };

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const dateToday = () => {
        return new Date().getDate();
    };

    const handleDateClick = (event) => {
        console.log(event.target);
        const clickedDate = event.target.textContent;
        // const newLocation = `/day?date=${yearForm}-${monthForm}-${clickedDate}`;
        // navigate(newLocation);
        console.log(clickedDate);
    };

    const renderDays = () => {
        const days = [];
        const daysCount = daysInMonth(date.getFullYear(), date.getMonth());
        const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
        const today = dateToday();

        let day = 1;
        let rowCount = Math.ceil((firstDay + daysCount) / 7);

        for (let r = 0; r < rowCount; r++) {
            const rowDays = [];
            for (let c = 0; c < 7; c++) {
                if (r === 0 && c < firstDay) {
                    const prevMonthDaysCount = daysInMonth(
                        date.getFullYear(),
                        date.getMonth() - 1,
                    );
                    const prevMonthDay =
                        prevMonthDaysCount - (firstDay - c) + 1;
                    rowDays.push(
                        <div
                            key={`prev-${c}`}
                            className="day prev-month-day"
                            onClick={handleDateClick}
                        >
                            {prevMonthDay}
                        </div>,
                    );
                } else if (day > daysCount) {
                    const nextMonthDay = day - daysCount;
                    rowDays.push(
                        <div
                            key={`next-${c}`}
                            className="day next-month-day"
                            onClick={handleDateClick}
                        >
                            {nextMonthDay}
                        </div>,
                    );
                    day++;
                } else {
                    const dayHasSchedule = monthScheduleData.filter((item) => {
                        // console.log(item.startDate);
                        const itemDate = new Date(item.startDate);
                        const a = dayjs(itemDate).format("YYYY-MM-DD");
                        // console.log(dayjs(itemDate).format("YYYY-MM-DD"));
                        console
                            .log
                            // "들어온 년도",
                            // itemDate.getFullYear(),
                            // "이번 년도",
                            // date.getFullYear(),
                            // "들어온 월",
                            // itemDate.getMonth(),
                            // "이번 월",
                            // date.getMonth(),
                            // "들어온 날짜",
                            // itemDate.getDate(),
                            // "오늘 날짜",
                            // day,
                            ();

                        return (
                            itemDate.getFullYear() === date.getFullYear() &&
                            itemDate.getMonth() === date.getMonth() &&
                            itemDate.getDate() === day + 1 &&
                            item.repeat === 2
                        );
                    });

                    const shortSchedule = monthScheduleData.filter((item) => {
                        const itemDate = new Date(item.startDate);

                        return (
                            itemDate.getFullYear() === date.getFullYear() &&
                            itemDate.getMonth() === date.getMonth() &&
                            itemDate.getDate() === day + 1 &&
                            item.repeat === 1
                        );
                    });

                    const cardColor = monthScheduleData.find((item) => {
                        const itemDate = new Date(item.startDate);
                        return (
                            itemDate.getFullYear() === date.getFullYear() &&
                            itemDate.getMonth() === date.getMonth() &&
                            itemDate.getDate() === day
                        );
                    })?.color;
                    const dayHasScheduleColor = dayHasSchedule.find((item) => {
                        const itemData = item.color;
                        return itemData;
                    });

                    const cardStyle = {
                        backgroundColor: cardColor || "transparent",
                    };
                    // console.log(day, dayHasSchedule);

                    rowDays.push(
                        <div
                            key={day}
                            className={`${
                                today === day ? "day today" : "day"
                            } ${
                                dayHasSchedule.length > 0
                                    ? "dayHasSchedule"
                                    : ""
                            } ${
                                shortSchedule.length > 0 ? "shortSchedule" : ""
                            }`}
                            onClick={handleDateClick}
                            style={
                                dayHasScheduleColor
                                    ? {
                                          backgroundColor: `${dayHasScheduleColor.color}1A`,
                                      }
                                    : null
                            } // backgroundColor 스타일 지정
                        >
                            {<span>{day}</span> || <span>{today}</span>}
                            {dayHasSchedule &&
                                dayHasSchedule.map(
                                    (item, index) =>
                                        index < 1 && (
                                            <div
                                                className="dayHasSchedule"
                                                style={
                                                    dayHasSchedule
                                                        ? {
                                                              // backgroundColor: `${dayHasSchedule.color}1A`,
                                                              color: item.color,
                                                          }
                                                        : null
                                                }
                                            >
                                                {item.title}
                                            </div>
                                        ),
                                )}
                            {shortSchedule &&
                                shortSchedule.map(
                                    (item, index) =>
                                        index < 2 && (
                                            <>
                                                <div
                                                    className="shortSchedule"
                                                    style={
                                                        dayHasSchedule
                                                            ? {
                                                                  backgroundColor: `${item.color}1A`,
                                                                  color: item.color,
                                                                  borderLeft: `3px solid ${item.color}`,
                                                              }
                                                            : null
                                                    }
                                                >
                                                    {item.title}
                                                </div>
                                            </>
                                        ),
                                )}
                            {dayHasSchedule &&
                                shortSchedule &&
                                dayHasSchedule.length + shortSchedule.length >
                                    3 && (
                                    <span
                                        className="moreSchedule"
                                        onClick={backgroundStateHandler}
                                    >
                                        + More
                                    </span>
                                )}
                        </div>,
                    );

                    day++;
                }
            }
            days.push(
                <div key={`row-${r}`} className="row">
                    {rowDays}
                </div>,
            );
        }

        return <div className="calendar-grid">{days}</div>;
    };
    const asd = useSelector((state) => state.cardReducer.month);

    return (
        <div className="mainContainer">
            <div className="calendar">
                <div className="header">
                    <AiOutlineLeft
                        className="prevBtn"
                        onClick={handlePrevMonth}
                    />
                    <h1>
                        {yearForm + " . "}
                        {monthForm + " . "}
                        {dateToday()}
                    </h1>
                    <AiOutlineRight
                        className="nextBtn"
                        onClick={handleNextMonth}
                    />
                </div>
                <div className="weekdays">
                    {weekdays.map((weekday) => (
                        <div key={weekday} className="weekday">
                            {weekday}
                        </div>
                    ))}
                </div>

                <div className="days">{renderDays()}</div>
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "90%",
                        zIndex: "99",
                    }}
                >
                    <Button />
                </div>
            </div>
            {backgroundState && (
                <LoginModalBackground onClick={backgroundStateHandler} />
            )}
        </div>
    );
}

export default Main;
