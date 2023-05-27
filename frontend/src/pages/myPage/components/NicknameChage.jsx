import "./NicknameChage.scss";

function NicknameChage() {
    return (
        <div className="NicknameChageContainer">
            <div className="userId">
                <h3>ID</h3>
                <span>userId@userId.com</span>
            </div>
            <div className="nicknameChage">
                <h3>닉네임</h3>
                <input className="nicknameInput" placeholder="NickName" />
            </div>
        </div>
    );
}

export default NicknameChage;
