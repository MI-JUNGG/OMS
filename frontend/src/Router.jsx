import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Daily from "./pages/daily/Daily";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/daily" element={<Daily />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
