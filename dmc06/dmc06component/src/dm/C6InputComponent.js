import React, { useState } from 'react'

export default function C6InputComponent() {
    // Cú pháp destructoring
    const [name, setName] = useState("C")

    const handleInputChange = (evt) => {
        setName(evt.target.value);
    }

    { console.log("RENDER..........") }
    return (
        <>
            <input value={name} type="text" placeholder='Mời nhập: ' onChange={handleInputChange} />

            <label>Giá trị đang nhập: {name}</label>
        </>
    )
}
