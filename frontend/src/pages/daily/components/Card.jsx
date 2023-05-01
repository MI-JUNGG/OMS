import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../../modules/card";
import { hours } from "./Seletime";
import axios from "axios";
import "./Card.scss";

function Card() {
    //초기 데이터 불러오기
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios
            .get("http://192.168.219.21:3001/day/card", {
                headers: {
                    Authorization: token,
                },
            })
            .then((response) => {
                console.log(response);
                setData(response);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const today = new Date();
    const id = today.toISOString();
    const [form, setForm] = useState({
        id: id,
        title: "",
        content: "",
        starTime: "00:00",
        endTime: "00:00",
    });
    const params = new URLSearchParams(window.location.search);
    const date = params.get("date");

    const createTitle = (e) => {
        setForm({ ...form, title: e.target.value });
    };
    const createContent = (e) => {
        setForm({ ...form, content: e.target.value });
    };
    const selectStartTime = (e) => {
        setForm({ ...form, starTime: e.target.value });
    };
    const selectEndTime = (e) => {
        setForm({ ...form, endTime: e.target.value });
    };

    //데이터 보내는 로직
    const counterHandler = (e) => {
        axios
            .post(`http://192.168.219.21:3001/day/card`, form)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log("error", error);
            });
        dispatch(addCard({ ...form, id }));
        setForm({
            id,
            title: "",
            content: "",
            startTime: "",
            endTime: "",
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
