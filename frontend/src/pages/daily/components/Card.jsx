import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../../modules/card";
import { hours } from "./Seletime";
import axios from "axios";
import "./Card.scss";

function Card() {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const today = new Date();
    const id = today.toISOString();
    // id: id,
    // title: "",
    // content: "",
    // starTime: "00:00",
    // endTime: "00:00",
    // fontColorid: "#0000",
    // color: "#0000",
    const [form, setForm] = useState({
        title: "",
        contents: "",
        starDate: "00:00",
        endDate: "00:00",
        fontColorId: 1,
        color: "#0000",
        date: "2023-03-04",
    });

    const params = new URLSearchParams(window.location.search);
    const date = params.get("date");

    const createTitle = (e) => {
        setForm({ ...form, title: e.target.value });
    };
    const createContent = (e) => {
        setForm({ ...form, contents: e.target.value });
    };
    const selectStartTime = (e) => {
        setForm({ ...form, startDate: e.target.value });
    };
    const selectEndTime = (e) => {
        setForm({ ...form, endDate: e.target.value });
    };

    //데이터 보내는 로직
    const counterHandler = (e) => {
        const {
            title,
            contents,
            startDate,
            endDate,
            fontColorId,
            date,
            color,
        } = form;
        const config = {
            headers: {
                Authorization:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6MSwiaWF0IjoxNjgyOTMxMjAyfQ.qbyo8xpoRQV1WbCNFiOzMC3-0pFQOjsHgN8heIc_qhc",
            },
        };
        console.log(form);
        axios
            .post(
                "http://192.168.219.21:3001/card/day",
                {
                    title,
                    contents,
                    startDate,
                    endDate,
                    fontColorId,
                    color,
                    date,
                },
                config,
            )
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log("error", error);
            });
        dispatch(addCard({ ...form, id }));
        // id,
        // title: "",
        // content: "",
        // startTime: "",
        // endTime: "",
        setForm({
            title: "",
            contents: "",
            starDate: "00:00",
            endDate: "00:00",
            fontColorId: 1,
            color: "#0000",
            date: "2023-03-04",
        });
    };

    return (
        <div>
            <div className="card">
                <div className="selectColor">
                    <span>color</span>
                    <span>color</span>
                    <span>color</span>
                </div>
                <div className="timeSelector">
                    start
                    <select
                        className="timeSelect"
                        onChange={selectStartTime}
                        id="hourSelect"
                    >
                        <option>시간선택</option>
                        {hours.map((hour) => {
                            return (
                                <option key={hour} value={hour}>
                                    {hour}
                                </option>
                            );
                        })}
                    </select>
                    end
                    <select
                        className="timeSelect"
                        onChange={selectEndTime}
                        id="hourSelect"
                    >
                        <option value="시간선택">시간선택</option>
                        {hours.map((hour) => {
                            return (
                                <option key={hour} value={hour}>
                                    {hour}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="cardTitle">
                    <span>title</span>
                    <textarea
                        onChange={createTitle}
                        value={form.title}
                        name="title"
                    />
                </div>
                <div className="contents">
                    <span>contents</span>
                    <textarea
                        onChange={createContent}
                        value={form.content}
                        name="content"
                    />
                </div>

                <button onClick={counterHandler} type="button">
                    완료
                </button>
            </div>
        </div>
    );
}

export default Card;
