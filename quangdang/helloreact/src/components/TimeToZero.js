import React from 'react'
import { useState, useEffect } from 'react';
const TimeToZero = () => {
    const [timer, setTimer] = useState(3);

    useEffect(() => {
        const intervalId = setInterval(() => {

            console.log("Interval working............");
            setTimer(prevTimer => {
                if (prevTimer === 1) {
                    return prevTimer;
                    // clearInterval(intervalId); // Dừng interval khi timer đạt đến 0
                    // Có thể thêm logic khác sau khi đếm ngược hoàn thành ở đây
                }
                return prevTimer - 1;

            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means useEffect will run once after the initial render

    return (
        <div>
            <h1>Timer: {timer}</h1>
        </div>
    );
};

export default TimeToZero;
