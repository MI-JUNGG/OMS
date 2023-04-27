import React from "react";
import { useState } from "react";

function weekly() {
    const [items, setItems] = useState([
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" },
        { id: 4, text: "Item 4" },
        { id: 5, text: "Item 5" },
    ]);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("text/plain", index);
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const targetIndex = parseInt(e.dataTransfer.getData("text/plain"));
        const newItems = [...items];
        const targetItem = newItems[targetIndex];
        newItems.splice(targetIndex, 1);
        newItems.splice(index, 0, targetItem);
        setItems(newItems);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    style={{ padding: 10, margin: 5, backgroundColor: "#ccc" }}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
}

export default weekly;
