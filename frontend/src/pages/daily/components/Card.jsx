import "./Card.scss";

function Card() {
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
                    <textarea type="text" className="cardTitleInput" />
                </div>
                <div className="contents">
                    <span>contents</span>
                    <textarea className="contentsInput" />
                </div>

                <button type="button">완료</button>
            </div>
        </div>
    );
}

export default Card;
