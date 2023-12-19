import React from 'react'

import { useState, createContext } from "react";
function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <>
            <h1>{`Hello ${user}!`}</h1>
            <input placeholder='enter for user' onChange={(evt) => { setUser(evt.target.value) }} />

            <Component2 user={user} />
        </>
    );
}

function Component2({ user }) {
    return (
        <>
            {console.log("Component2 rerender")}
            <h1>Component 2</h1>
            <Component3 user={user} />
        </>
    );
}

function Component3({ user }) {
    return (
        <>
            {console.log("Component3 rerender")}
            <h1>Component 3</h1>
            <Component4 user={user} />
        </>
    );
}

function Component4({ user }) {
    return (
        <>
            {console.log("Component4 rerender")}
            <h1>Component 4</h1>
            <Component5 user={user} />
        </>
    );
}

function Component5({ user }) {
    return (
        <>
            {console.log("Component5 rerender")}
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}
export default function DmRerender() {
    return (
        <Component1 />
    )
}