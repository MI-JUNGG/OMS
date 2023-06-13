import { useLocation } from "react-router";
import { useEffect } from "react";
import { LoginNaver } from "./LoginNaver";

export default function NaverLogin() {
    const location = useLocation();

    useEffect(() => {
        if (window.location.href.includes("access_token")) {
            window.localStorage.setItem(
                "token",
                window.location.href.split("=")[1].split("&")[0] ?? "none",
            );
            // location("/");
        }
    }, []);

    return (
        <div>
            <LoginNaver></LoginNaver>
        </div>
    );
}
