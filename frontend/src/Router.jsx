import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Daily from "./pages/daily/Daily";
import Nav from "./pages/nav/Nav";
import Week from "./pages/weekly/Week";

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/day" element={<Daily />} />
                <Route path="/weekly" element={<Week />} />
                <Route path="/auth/kakao/callback" element={<Main />} />
                <Route path="/auth/naver/callback" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
