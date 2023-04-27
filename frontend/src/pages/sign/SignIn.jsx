import "./SignIn.scss";

function SignIn() {
    return (
        <>
            <div className="signInContainer">
                <h1>로그인</h1>
                <div className="userInput">
                    <input className="userId" placeholder="이메일"></input>
                    <input
                        className="userPassward"
                        placeholder="비밀번호"
                    ></input>
                </div>
            </div>
            <div />
        </>
    );
}

export default SignIn;
