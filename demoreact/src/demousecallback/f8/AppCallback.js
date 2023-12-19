import React, { useCallback, useState } from 'react'
import ContentCallback from './ContentCallback';

export default function AppCallback() {

    const [count, setCount] = useState(0);

    /*
    DEMO kết hợp memo và useCallback

    // Khi click vào nút button Click me làm thằng Cha rerender thì 
    hàm handleIncrease thay đổi tham chiếu, dẫn đến thằng memo không hiểu để nhớ lại 
    ContentCallback này có thay đổi gì không, dẫn đến thằng con bị rerender 
    
    const handleIncrease = useCallback(() => {
        setCount(preCount => preCount + 1);
    }, [])
    */

    const handleIncrease = () => {
        setCount(preCount => preCount + 1);
    };
    return (
        <>
            <div>AppCallback</div>
            <ContentCallback onIncrease={handleIncrease} />
            <h1>Count {count}</h1>
        </>
    )
}
