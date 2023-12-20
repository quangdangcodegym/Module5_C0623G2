import React, { useState } from 'react'
import Timer from './Timer'

export default function AppTimer() {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <button onClick={() => { setDisplay(!display) }}>ÂN HIÊN</button>
            {display && <Timer />}
        </>
    )
}
