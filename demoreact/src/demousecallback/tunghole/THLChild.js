import React, { useEffect, useState } from 'react'

export default function THLChild({ getData }) {

    const [comments, setComments] = useState([]);


    useEffect(() => {
        console.log("Child component - useEffect - getData");
        getData('comments')
            .then((res) => res.json())
            .then((res) => {
                const comments = res.data;
                setComments(comments);
            })
    }, [getData])
    return (
        <>
            <div>THLChild</div>
            <p>Child component</p>
            <p>{JSON.stringify(comments)}</p>
        </>
    )
}
