import React, { useEffect } from "react";

function NaverCallback() {
    useEffect(() => {
        if (window.location.href.includes("access_token")) {
            window.localStorage.setItem(
                "token",
                window.location.href.split("=")[1].split("&")[0] ?? "none",
            );
            // location("/");
        }
    }, []);

    return <div>NaverCallback</div>;
}

export default NaverCallback;
