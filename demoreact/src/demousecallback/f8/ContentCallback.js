import React, { memo } from 'react'

function ContentCallback({ onIncrease }) {


    console.log("RENDER");
    return (
        <>
            <div>ContentCallback</div>
            <button onClick={onIncrease} >Click me</button>
        </>
    )
}
export default memo(ContentCallback);