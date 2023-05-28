import { useState } from "react";
import "./UserInfo.scss";
import NicknameChage from "./userInfoComponents/NicknameChage";
import PasswordChage from "./userInfoComponents/PasswordChage";

function UserInfo() {
    const [contentSelector, setContentSelector] = useState(0);
    const contentChanger = (id) => {
        setContentSelector(id);
    };
    return (
        <>
            <div className="userInfoContainer">
                <div className="userInfoBox">
                    <div className="contentSelector">
                        <h2
                            className={
                                contentSelector === 0 ? "active" : "inactive"
                            }
                            onClick={() => contentChanger(0)}
                        >
                            내정보
                        </h2>
                        <h2
                            className={
                                contentSelector === 1 ? "active" : "inactive"
                            }
                            onClick={() => contentChanger(1)}
                        >
                            비밀번호
                        </h2>
                    </div>
                    <div className="myPageContent">
                        {contentSelector === 0 ? (
                            <NicknameChage />
                        ) : (
                            <PasswordChage />
                        )}
                    </div>
                    <div className="buttonZone">
                        <button className="SubButton" type="button">
                            저장하기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserInfo;
