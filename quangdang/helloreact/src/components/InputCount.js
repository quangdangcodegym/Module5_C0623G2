import React, { useEffect } from 'react'
import { useState } from 'react';

export default function InputCount({ count, message, updateCountParent }) {
    const [inputCount, setInputCount] = useState(count);


    console.log("inputCount vs count", inputCount, count);
    useEffect(() => {
        setInputCount(count);
    }, [count])
    return (
        <div>
            <input onInput={(evt) => setInputCount(evt.target.value)} type="text" placeholder="Input Count " value={inputCount} />
            <button onClick={(evt) => { updateCountParent(inputCount) }}>Update</button>
        </div>
    )
}