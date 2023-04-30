import "./Card.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../../../modules/card";
import { hours } from "./Seletime";

function Card() {
    const dispatch = useDispatch();
    const today = new Date();
    const id = today.toISOString();
    const [form, setForm] = useState({
        id: id,
        title: "",
        content: "",
        time: "00:00",
    });
    const params = new URLSearchParams(window.location.search);
    const date = params.get("date");
    useEffect(() => {
        console.log(date);
    });

    const createTitle = (e) => {
        setForm({ ...form, title: e.target.value });
    };
    const createContent = (e) => {
        setForm({ ...form, content: e.target.value });
    };
    const selectTime = (e) => {
        setForm({ ...form, time: e.target.value });
    };
    const counterHandler = (e) => {
        dispatch(addCard({ ...form, id }));
        setForm({
            id,
            title: "",
            content: "",
            time: "",
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
                        onChange={selectTime}
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
                        onClick={selectTime}
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