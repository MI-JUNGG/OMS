import "./RepeatBtn.scss";

function RepeatBtn() {
    return (
        <div id="repeatType">
            <div className="repeatBot">
                <select name="type">
                    <option value="매일">매일</option>
                    <option value="매주">매주</option>
                    <option value="매달">매달</option>
                    <option value="매년">매년</option>
                </select>
            </div>{" "}
            <div>날짜자리</div>
        </div>
    );
}

export default RepeatBtn;
