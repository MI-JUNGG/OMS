import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cardmodal } from "../../../modules/module/modal";
import axios from "axios";
import AlldayTime from "./CardCompo/AlldayTime";
import ModalLink from "../../../assets/images/modal/ModalLink";
import ModalNote from "../../../assets/images/modal/modalNote";
import ModalX from "../../../assets/images/modal/ModalX";
import ModalCheck from "../../../assets/images/modal/ModalCheck";
import EndDate from "../components/CardCompo/endDate/EndDate";
import RepeatEnd from "./repeat/RepeatEnd";
import RepeatStart from "./repeat/RepeatStart";
import ColorSelector from "./color/ColorSelector";
import All from "./All";
import Repeat from "./repeat/Repeat";
import ColorPicker from "./color/ColorPicker";
import "./Card.scss";

function Card() {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [link, setLink] = useState(false);
    const [note, setNote] = useState(false);

    const linkHandler = () => {
        setLink((prev) => !prev);
    };

    const noteHandler = () => {
        setNote((note) => !note);
    };

    const openModal = useSelector((state) => state.modalReducer.dateControl);
    const endDateModal = useSelector(
        (state) => state.modalReducer.endDateControl,
    );
    const repeatStart = useSelector(
        (state) => state.modalReducer.repeatControl,
    );
    const repeatEnd = useSelector(
        (state) => state.modalReducer.repeatEndControl,
    );
    console.log(repeatEnd);
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

    const cardHandler = () => {
        dispatch(cardmodal());
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
                <div className="iconBtn">
                    <div onClick={counterHandler}>
                        <ModalCheck />
                    </div>
                    <div onClick={cardHandler}>
                        <ModalX width={30} height={30} />
                    </div>
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
                    {!openModal && !endDateModal && datetype ? (
                        <All />
                    ) : (
                        !openModal && !endDateModal && <Repeat />
                    )}
                    {openModal && <AlldayTime />}
                    {endDateModal && <EndDate />}
                    {repeatEnd && <RepeatEnd />}
                    {repeatStart && <RepeatStart />}
                </div>
                <div className="modalx" onClick={clearUrl}>
                    {link === true && <ModalX width={10} height={10} />}
                </div>
                <div className="link">
                    <div className="linkIcon">
                        <ModalLink />
                    </div>
                    {link === false ? (
                        <button onClick={linkHandler}>링크</button>
                    ) : (
                        <input
                            className="inputline"
                            value={url}
                            onChange={urlHandler}
                            type="url"
                        />
                    )}
                </div>
                <div className="modalx" onClick={clearContents}>
                    {note === true && <ModalX width={10} height={10} />}
                </div>
                <div className="link">
                    <ModalNote />
                    {note === false ? (
                        <button onClick={noteHandler}>메모</button>
                    ) : (
                        <textarea
                            className="textArea"
                            onChange={createContent}
                            value={contents}
                            name="content"
                        />
                    )}
                </div>
                <div className="selectColor">
                    <ColorSelector />
                </div>
            </div>
            <div className="colorModal">
                <ColorPicker />
            </div>
        </div>
    );
}

export default Card;
