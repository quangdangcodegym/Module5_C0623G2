import React from 'react'
import { useState } from 'react';
import InputCount from './InputCount';

export default function Count() {
    const [count, setCount] = useState(1)       // 1 lần khi khỏi tạo

    const handleIncrease = () => {
        setCount(count + 1);
    }
    const updateCountParent = (value) => {
        setCount(parseInt(value));
    }
    return (
        <>
            <label>Count: {count}</label>
            {/* <button onClick={(e) => { setCount(count + 1) }}>TĂNG</button> */}
            <button onClick={handleIncrease}>TĂNG</button>
            <button onClick={(evt) => { setCount(count - 1) }}>GIẢM</button>
            <InputCount count={count} message={"hello`"} updateCountParent={updateCountParent} />
        </>
    )
}
