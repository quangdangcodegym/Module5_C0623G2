import React, { useCallback, useState } from 'react'
import THLChild from './THLChild';

export default function THLAppUseCallback() {
    const [users, setUsers] = useState([]);

    /*

    Khi component cha RERENDER thì getData thay đổi tham chiếu, dẫn đến khi truyền prop hàm getData vào
    component con dẫn đến dependencies thay đổi thì nó sẽ thay đổi theo
    const getData = useCallback((type) => {
        return fetch(`https://reqres.in/api/${type}`);
    }, [])

    */

    const getData = (type) => {
        return fetch(`https://reqres.in/api/${type}`);
    }

    const handClick = () => {
        getData('users')
            .then((res) => res.json())
            .then((res) => {
                const users = res.data;
                setUsers(users);
            })
    }
    return (
        <>
            <p>DATA:</p>
            <button onClick={handClick}>GET DATAs</button>
            <p>{JSON.stringify(users)}</p>

            <THLChild getData={getData} />
        </>
    )
}
