import Card from "./components/Card";
import Seletime from "./components/Seletime";
import { useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import axios from "axios";
import { useEffect } from "react";

import "./Daily.scss";

function Daily() {
    const ref = useRef();
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios
            .get("http://192.168.219.21:3001/card/day", {
                params: {
                    date: "2023-03-04",
                },
                headers: {
                    Authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6MSwiaWF0IjoxNjgyOTMxMjAyfQ.qbyo8xpoRQV1WbCNFiOzMC3-0pFQOjsHgN8heIc_qhc",
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="topContanier">
            <DndProvider backend={HTML5Backend}>
                <div className="contanier">
                    <Card />
                    <div className="centered">
                        <Seletime />
                    </div>
                </div>
            </DndProvider>
        </div>
    );
}

export default Daily;
