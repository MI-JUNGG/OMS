import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateControl } from "../../../modules/module/modal";
import axios from "axios";
import AlldayTime from "./CardCompo/AlldayTime";
import ModalLink from "../../../assets/images/modal/ModalLink";
import ModalNote from "../../../assets/images/modal/modalNote";
import ModalX from "../../../assets/images/modal/ModalX";
import ModalCheck from "../../../assets/images/modal/ModalCheck";
import EndDate from "../components/CardCompo/endDate/EndDate";
import "./Card.scss";
import All from "./All";
import Repeat from "./repeat/Repeat";

function Card() {
    const [data, setData] = useState(null);

    const openModal = useSelector((state) => state.modalReducer.dateControl);
    const endDateModal = useSelector(
        (state) => state.modalReducer.endDateControl,
    );
    const datetype = useSelector((state) => state.modalReducer.dateType);
    const outerRef = useRef(null);

    console.log(datetype);

    const [form, setForm] = useState({
        title: "",
        contents: "",
        url: "",
        repeatId: 1,
        startDate: "",
        endDate: "",
        color: "",
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
        setForm({
            title: "",
            contents: "",
            url: "",
            repeatId: 1,
            startDate: "",
            endDate: "",
            color: "",
        });
        // dispatch(addCard({ ...form, id }));
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
                        value={title}
                        name="title"
                        placeholder="제목"
                    />
                </div>
                <div className="timeSelect">
                    {openModal === false &&
                    endDateModal === false &&
                    datetype ? (
                        <All />
                    ) : (
                        <Repeat />
                    )}
                    {openModal && <AlldayTime />}
                    {endDateModal && <EndDate />}
                </div>
                <div className="modalx" onClick={clearUrl}>
                    <ModalX />
                </div>
                <div className="link">
                    <div className="linkIcon">
                        <ModalLink />
                    </div>
                    <input value={url} onChange={urlHandler} type="url" />
                </div>
                <div className="modalx" onClick={clearContents}>
                    <ModalX />
                </div>
                <div className="contents">
                    <ModalNote />
                    <textarea
                        onChange={createContent}
                        value={contents}
                        name="content"
                    />
                </div>
                <div className="selectColor"></div>
            </div>
        </div>
    );
}

export default Card;
