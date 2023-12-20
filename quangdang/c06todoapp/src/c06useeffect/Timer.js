import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

//Math.random() * (max - min) + min
export default function Timer() {
    const [count, setCount] = useState(0);

    const [number, setNumber] = useState(1);
    useEffect(() => {
        console.log("thực hiện useEffect");
        let timer = setTimeout(() => {
            // setCount((count) => count + 1);
        }, 1000);

        return () => {
            console.log("CLEAN UP00");
            clearTimeout(timer);
        }
    });

    const handleRandom = (e) => {
        console.log("OLD: ", number);
        let newNumber = Math.floor(Math.random() * (3 - 1) + 1);
        setNumber(Math.floor(newNumber));
        console.log("NEW: ", newNumber);
    }
    return (
        <>
            <p>Number: {number}</p>
            <p>Count: {count}</p>
            <button onClick={handleRandom}>RANDOM</button>
            <h1>I've rendered {count} times!</h1>
        </>
    )
}