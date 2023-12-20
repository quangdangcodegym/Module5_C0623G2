import React, { useEffect, useState } from 'react'
import Todo from './Todo';

import "./todo.css";

export default function TodoApp() {
    const [todos, setTodos] = useState([]);

    const [todo, setTodo] = useState({
        id: 0,
        name: "",
        type: "Important",
        isEdit: false
    });

    const handleChange = (evt) => {
        if (evt.target.name === "nameTodo") {
            setTodo({
                ...todo,
                name: evt.target.value
            })
        } else {
            setTodo({
                ...todo,
                type: evt.target.value
            })
        }

    }
    const handleAddEditTodo = (evt) => {
        if (todo.isEdit) {
            let obj = todos.find(td => td.id === todo.id);
            obj.name = todo.name;
            obj.type = todo.type;
            setTodos([...todos]);
            setTodo({
                id: 0,
                name: "",
                type: "Important",
                isEdit: false
            })
        } else {
            let addTodoAPI = async () => {
                let todoNew = {
                    name: todo.name,
                    type: todo.type
                }
                try {
                    let resTodoCreated = await fetch("https://6582744002f747c8367964f7.mockapi.io/todo", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json', // Specify the content type if sending JSON data
                        },
                        body: JSON.stringify(todoNew),
                    });
                    if (!resTodoCreated.ok) {
                        throw new Error(`HTTP error! Status: ${resTodoCreated.status}`);
                    }
                    let resTodos = await fetch("https://6582744002f747c8367964f7.mockapi.io/todo");
                    if (!resTodos.ok) {
                        throw new Error(`HTTP error! Status: ${resTodos.status}`);
                    }
                    const dataTodo = await resTodos.json();

                    setTodos(dataTodo)
                    setTodo({
                        id: 0,
                        name: "",
                        type: "Important"
                    });
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
            addTodoAPI();


        }

    }

    useEffect(() => {
        let getTodosFromAPI = async () => {
            try {
                let res = await fetch("https://6582744002f747c8367964f7.mockapi.io/todo");
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setTodos(data)
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        getTodosFromAPI();

        return () => {
            // clean up: [] when will unmount
        }
    }, []);
    const handleEdit = (id) => {
        let findByID = async () => {
            try {
                let res = await fetch(`https://6582744002f747c8367964f7.mockapi.io/todo/${id}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const dataTodo = await res.json();
                setTodo({
                    ...dataTodo,
                    isEdit: true
                });
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        findByID();
    }
    const handleCancel = (evt) => {
        setTodo({
            id: 0,
            name: "",
            type: "Important",
            isEdit: false
        });
    }
    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className='col-6'>
                    <h1>Todo App</h1>
                    <div className='row mb-3'>
                        <label className='label-control mb-2'>Nhập name: </label>
                        <input name='nameTodo' value={todo.name} onChange={handleChange} className='form-control' type="text" placeholder='Nhập name' />
                        <select value={todo.type} name='typeTodo' className='form-select mt-2' onChange={handleChange}>
                            <option>Important</option>
                            <option>Normal</option>
                        </select>
                    </div>
                    <div className='row d-flex justify-content-center' >
                        <div className='row justify-content-between mb-5'>
                            <button className='col-2 btn btn-primary' onClick={handleAddEditTodo} >{todo.isEdit ? "Cập nhật" : "Thêm"}</button>
                            {todo.isEdit && <button className='col-2 btn btn-danger' onClick={handleCancel} >Cancel</button>}
                            <div className='col-3'>
                                <select className='form-select'>
                                    <option>Important</option>
                                    <option>Normal</option>
                                </select>
                            </div>
                        </div>
                        {
                            todos.map((todo) => (
                                <div className='row mb-2' key={todo.id}>
                                    <div className='col-8'>{todo.id} - {todo.name} - {todo.type}</div>
                                    <div className='col-4 row justify-content-end remove-full-width'>
                                        <button className='btn btn-primary me-2' onClick={(evt) => { handleEdit(todo.id) }}><i class="fa-solid fa-pen-to-square"></i></button>
                                        <button className='btn btn-warning'><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
