import "./PasswordChage.scss";

function PasswordChage() {
    return (
        <div className="passwordChageContainer">
            <div className="passwordChage">
                <span>현재 비밀번호</span>
                <input
                    className="passwordInput"
                    placeholder="비밀번호"
                    type="password"
                />
            </div>
            <div className="passwordChage">
                <span>새 비밀번호</span>
                <input
                    className="passwordInput"
                    placeholder="비밀번호"
                    type="password"
                />
            </div>
            <div className="passwordChage">
                <span>새 비밀번호 확인</span>
                <input
                    className="passwordInput"
                    placeholder="비밀번호"
                    type="password"
                />
            </div>
        </div>
    );
}

export default PasswordChage;
