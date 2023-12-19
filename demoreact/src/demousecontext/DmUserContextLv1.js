import React from 'react'

import { useState, createContext, useContext } from "react";


const UserContext = createContext()
function Component1() {
    const [userAdv, setUserAdv] = useState({
        name: "Jesse Hall",
        updateName: (strName) => {
            console.log("Vào hàm update Name: " + strName);
            setUserAdv({
                ...userAdv,
                name: strName
            });
        }
    });

    return (
        <>
            <UserContext.Provider value={userAdv}>
                <h1>{`Hello ${userAdv.name}!`}</h1>
                <Component2 />
            </UserContext.Provider>
        </>
    );
}

function Component2() {
    return (
        <>
            {console.log("Component2 render")}
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            {console.log("Component3 render")}
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            {console.log("Component4 render")}
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

function Component5() {
    let userAdv = useContext(UserContext);
    return (
        <>
            <h1>Component 5</h1>

            <input placeholder='Cập nhật ở thằng con lên xem' type="text" onChange={(evt) => { userAdv.updateName(evt.target.value) }} />
            <h2>{`Hello ${userAdv.name} again!`}</h2>
        </>
    );
}
export default function DmUseContextLv1() {
    return (
        <Component1 />
    )
}
