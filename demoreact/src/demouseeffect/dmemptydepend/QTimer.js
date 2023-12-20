import React, { useState, useEffect } from 'react'

export default function QTimer({ number }) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log("CHẠY USEEFFECT---", number);
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1)
        }, 1000);

        return () => {
            console.log("THỰC THI VIỆC CLEAN");
            clearInterval(interval);
        }
    }, []);


    return (
        <>
            <label>Number: {number}</label>
            <div>Thời gian đã trôi qua {time} giây</div>
        </>

    )
}