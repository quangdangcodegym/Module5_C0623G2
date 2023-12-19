import React, { useState } from 'react'

export default function InputComponent({ message }) {

    let [msg, setMsg] = useState(message);


    console.log("msgInFunction");
    return (
        <>
            {console.log("msgInRender", msg)}
            <input type="text" placeholder="Enter cencious" value={msg} onChange={(evt) => setMsg(evt.target.value)} />
        </>

    )
}
