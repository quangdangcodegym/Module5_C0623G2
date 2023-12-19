import React, { useState } from 'react'

export default function C6DisplayComponent() {

    const [display, setDisplay] = useState(true);
    const handleDisplay = (evt) => {
        alert("Bạn có chắc không");
        // setDisplay((preState)=> !preState );
        setDisplay(!display);
    }
    return (
        <>
            <h2>Hello world</h2>
            {/* <button onClick={(evt) => alert("Bạn có chắc không") }>Delete the component</button> */}

            {
                // Cơ ché render có điều kiện phụ thuộc vào state display: dùng && hoặc tenery operator
                // display && <button onClick={handleDisplay}>Delete the component</button>
                // display ? <button onClick={handleDisplay}>Delete the component</button> : null

                // Cần truyền vào 1 callback function: có 2 cách
                display && <button onClick={handleDisplay}>Delete the component</button>
            }
        </>
    )
}
