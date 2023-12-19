import React, { useState } from 'react'
import C6DisplayChild from './C6DisplayChild';

export default function C6DisplayComponentAdv() {

    const [display, setDisplay] = useState(true);

    // handleDisplay = 0xc334543
    // setState: handleDisplay =  0xc77865
    const handleDisplay = (evt) => {
        if (display == true) {
            alert("Bạn có chắc chắc đóng không");
        }
        // setDisplay((preState)=> !preState );
        setDisplay(!display);
    }

    return (
        <>
            {display && <C6DisplayChild message="HELLO QUANG" display={display} />}
            <button onClick={handleDisplay} >ẨN/HIỆN</button>
        </>
    )
}
