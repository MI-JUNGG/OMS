import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Daily from "./pages/daily/Daily";
import Nav from "./pages/nav/Nav";
import Week from "./pages/weekly/weekly";

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/day" element={<Daily />} />
                <Route path="/weekly" element={<Week />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
