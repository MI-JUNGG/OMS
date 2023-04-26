import "./Card.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../../../modules/card";

function Card() {
    const dispatch = useDispatch();
    const today = new Date();
    const id = today.toISOString();
    const [form, setForm] = useState({
        id: id,
        title: "",
        content: "",
    });

    const createTitle = (e) => {
        setForm({ ...form, title: e.target.value });
    };
    const createContent = (e) => {
        setForm({ ...form, content: e.target.value });
    };
    const counterHandler = (e) => {
        dispatch(addCard({ ...form, id }));
        setForm({
            id,
            title: "",
            content: "",
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
