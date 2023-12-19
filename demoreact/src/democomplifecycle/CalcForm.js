import React, { useState } from 'react'
import InputComponentClass from './InputComponentClass';
import InputComponent from './InputComponent';

export default function CalcForm() {
    const [name, setName] = useState("CODEGYM");
    const [hide, setHide] = useState(true);
    return (
        <>
            <input type="" placeholder="Controll" onChange={(evt) => { setName(evt.target.value) }} />
            <button onClick={(evt) => setHide(!hide)}>HIDE/SHOW</button>
            {/* {hide && <InputComponentClass message={name} />} */}
            {hide && <InputComponent message={name} />}
        </>

    )
}
