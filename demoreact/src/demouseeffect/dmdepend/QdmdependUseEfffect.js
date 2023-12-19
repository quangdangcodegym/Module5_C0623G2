import React, { useState } from 'react'
import QTimer from './QTimer';
import QTimerClass from './QTimerClass';

export default function QdmdependUseEfffect() {
    const [showTimer, setShowTimer] = useState(true);

    const [number, setNumber] = useState(0);

    const toggleTimer = () => {
        setShowTimer(prevTimer => !prevTimer);
    }
    const randomNumber = () => {
        setNumber(Math.floor(Math.random() * 3) + 1);
    }
    return (
        <>
            <div>Q Demo empty dependencies UseEfffect</div>


            <div>
                {showTimer && <QTimer number={number} />}
                <button type="button" onClick={toggleTimer}  >
                    {showTimer ? 'Ẩn Timer' : 'Hiển Timer'}
                </button>
                <button type="button" onClick={randomNumber}  >
                    Random
                </button>
            </div>
        </>
    )
}
