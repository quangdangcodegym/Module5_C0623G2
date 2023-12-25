import React, { useEffect, useState } from 'react'

export default function TimeToZeroTimeout() {
    const [timer, setTimer] = useState(3);
    useEffect(() => {
        let b = setTimeout(() => {
            setTimer(pre => {
                if (!(pre == 0)) {
                    return pre - 1;
                }
                return pre;
            })
        }, 1000);
        return () => {
            clearTimeout(b);
        }
    }, [timer])
    return (
        <>
            <label>Timer: {timer}</label>
        </>
    )
}
