import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../../modules/card";
import { hours } from "./Seletime";
import axios from "axios";
import "./Card.scss";
import AlldayTime from "./CardCompo/AlldayTime";
import ModalLink from "../../../assets/images/modal/ModalLink";
import ModalNote from "../../../assets/images/modal/modalNote";
import ModalX from "../../../assets/images/modal/ModalX";

function Card() {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const today = new Date();
    const id = today.toISOString();

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
        <div className="modalBackGround">
            <div className="card">
                <div className="cardTitle">
                    <input
                        type="search"
                        onChange={createTitle}
                        value={form.title}
                        name="title"
                        placeholder="제목"
                    />
                </div>
                <AlldayTime />
                <div>
                    <ModalLink />
                    <input type="url" />
                </div>
                <div className="contents">
                    <ModalNote />
                    <textarea
                        onChange={createContent}
                        value={form.content}
                        name="content"
                    />
                </div>
                <div className="selectColor"></div>
            </div>
        </div>
    );
}

export default Card;
