import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateControl } from "../../../modules/module/modal";
import axios from "axios";
import AlldayTime from "./CardCompo/AlldayTime";
import ModalLink from "../../../assets/images/modal/ModalLink";
import ModalNote from "../../../assets/images/modal/modalNote";
import ModalX from "../../../assets/images/modal/ModalX";
import ModalCheck from "../../../assets/images/modal/ModalCheck";
import AllDaySelectedTime from "./CardCompo/AllDaySelectedTime";
import "./Card.scss";

function Card() {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const today = new Date();
    const id = today.toISOString();
    const openModal = useSelector((state) => state.modalReducer.dateControl);
    const outerRef = useRef(null);

    const modalHandler = () => {
        dispatch(dateControl());
        console.log(openModal);
    };

    const [form, setForm] = useState({
        title: "1",
        contents: "1",
        url: "www.example.com",
        repeatId: 1,
        startDate: "2023-05-01 23:00:00",
        endDate: "2023-05-01 23:10:00",
        color: "#0000",
    });
    const { title, contents, startDate, endDate, color, url, repeatId } = form;
    useEffect(() => {
        const handleScroll = (event) => {
            const { target } = event;
            const isScrollable =
                target.scrollHeight > target.clientHeight &&
                (target === outerRef.current ||
                    target.contains(outerRef.current));

            if (!isScrollable || !outerRef.current.contains(event.target)) {
                event.preventDefault();
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

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
    const urlHandler = (e) => {
        setForm({ ...form, url: e.target.value });
    };
    const clearContents = () => {
        setForm({ ...form, contents: "" });
    };
    const clearUrl = () => {
        setForm({ ...form, url: "" });
    };

    const counterHandler = (e) => {
        const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDczNDYwNn0.aRiYcyPZ6wyixzWbQnDWKzbCb8BlHMVSg3LnTQ2oZnA";
        const config = {
            headers: {
                Authorization: token,
            },
        };

        console.log(form);
        axios
            .post(
                "http://192.168.219.152:3001/card",
                {
                    title: title,
                    memo: contents,
                    startDate: startDate,
                    repeatId: repeatId,
                    endDate: endDate,
                    color: color,
                    link: url,
                    deadline: endDate,
                },
                config,
            )
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log("error", error);
            });

        // dispatch(addCard({ ...form, id }));
        // setForm({
        //     title: "",
        //     contents: "",
        //     starDate: "00:00",
        //     endDate: "00:00",
        //     fontColorId: 1,
        //     color: "#0000",
        //     date: "2023-03-04",
        // });
    };

    return (
        <div className="modalBackGround">
            <div className="card" ref={outerRef}>
                <div onClick={counterHandler}>
                    <ModalCheck />
                </div>
                <div className="cardTitle">
                    <input
                        type="search"
                        onChange={createTitle}
                        value={form.title}
                        name="title"
                        placeholder="제목"
                    />
                </div>
                {openModal === false && (
                    <div className="timeControll">
                        <AllDaySelectedTime />
                        <div className="btn">
                            <button>종일</button>
                            <button onClick={modalHandler}>반복</button>
                        </div>
                    </div>
                )}
                {openModal && <AlldayTime />}
                <div className="modalx" onClick={clearUrl}>
                    <ModalX />
                </div>
                <div className="link">
                    <div className="linkIcon">
                        <ModalLink />
                    </div>
                    <input value={form.url} onChange={urlHandler} type="url" />
                </div>
                <div className="modalx" onClick={clearContents}>
                    <ModalX />
                </div>
                <div className="contents">
                    <ModalNote />
                    <textarea
                        onChange={createContent}
                        value={form.contents}
                        name="content"
                    />
                </div>
                <div className="selectColor"></div>
            </div>
        </div>
    );
}

export default Card;
