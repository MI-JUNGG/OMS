import { useEffect } from "react";

export const NAVER_CLIENT_ID = "W9f_MEprUwIoTeyjePIb";
export const NAVER_CLIENT_SECRET = "z9qj_eIPjD";
export const NAVER_STATE_STRING = Math.random().toString(36).substr(3, 14);
export const NAVER_CALLBACK_URI = "http://localhost:5173/auth/naver/callback";

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STATE_STRING}&redirect_uri=${NAVER_CALLBACK_URI}`;
export const NAVER_ACCESS_TOKEN_URL = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=EIc5bFrl4RibFls1&state=9kgsGTfH4j7IyAkg`;

export function LoginNaver() {
    const loginFormWithNaver = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URI,
            isPopup: false,
        });
        naverLogin.init();
    };

    useEffect(() => {
        loginFormWithNaver();
    }, []);

    return <div id="naverIdLogin"> </div>;
}
