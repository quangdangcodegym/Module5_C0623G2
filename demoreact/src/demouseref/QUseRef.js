import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export default function QUseRef() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        console.log("Current count: " + count.current);
        count.current = count.current + 1;


        return () => {
            console.log("CLEAN UP: ");
        }
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}
