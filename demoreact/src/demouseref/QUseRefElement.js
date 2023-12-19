import React, { useRef } from 'react'

export default function QUseRefElement() {
    const inputElement = useRef();

    const focusInput = () => {

        console.log(inputElement.current.value);
        inputElement.current.focus();


    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
