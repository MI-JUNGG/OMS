import "./Card.scss";

function Card() {
    return (
        <div>
            <div className="card">
                <span>일정카드</span>
                <div className="selectColor">
                    <span>color</span>
                    <span>color</span>
                    <span>color</span>
                </div>
            </div>
            <div className="cardTitle">
        <span>title</span>
        <div className="cardTitleInput"></div>
            </div>
        </div>
    );
}

export default Card;
