import React from 'react'
/*
export default function C6DisplayChild(props) {

    console.log("THANG CON NHAN PROPS", props);
    return (
        <>
            <h2>Hello world {props.mesage}</h2>
        </>
    )
}
*/
export default function C6DisplayChild({ message, display }) {

    console.log("THANG CON NHAN PROPS", message, message);
    return (
        <>
            <h2>Hello world {message}</h2>
        </>
    )
}