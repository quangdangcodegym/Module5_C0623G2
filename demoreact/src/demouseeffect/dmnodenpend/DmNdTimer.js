import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function DmNdTimer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return (
        <>
            {console.log("Component rerender")}
            <h1>I've rendered {count} times!</h1>;
        </>

    )
}

