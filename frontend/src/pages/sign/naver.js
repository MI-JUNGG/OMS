export const NAVER_CLIENT_ID = "W9f_MEprUwIoTeyjePIb";
export const NAVER_STATE_STRING = Math.random().toString(36).substr(3, 14);
export const NAVER_CALLBACK_URI = "http://localhost:5173/auth/naver/callback";

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STATE_STRING}&redirect_uri=${NAVER_CALLBACK_URI}`;
