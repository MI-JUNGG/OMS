import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Daily from "./pages/daily/Daily";
import Nav from "./pages/nav/Nav";
import Week from "./pages/weekly/weekly";
import MyPage from "./pages/myPage/myPage";

function Router() {
    return (
        <BrowserRouter>
            {location.pathname !== "/myPage" && <Nav />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/day" element={<Daily />} />
                <Route path="/weekly" element={<Week />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/auth/kakao/callback" element={<Main />} />
                <Route path="/auth/naver/callback" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
