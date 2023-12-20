import React, { useState } from 'react'
import Todo from './Todo';

import "./todo.css";
const initTodos = [
    new Todo(1, "Quang Dang", "Important"),
    new Todo(2, "Quang Dang 12", "Important"),
    new Todo(3, "Quang Dang 123", "Normal")

]
export default function TodoApp() {
    const [todos, setTodos] = useState(initTodos);

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

            // let obj = todos.find(td => td.id === todo.id);
            // obj = {
            //     ...todo
            // }


            setTodos([...todos]);
            setTodo({
                id: 0,
                name: "",
                type: "Important",
                isEdit: false
            })
        } else {
            let todoNew = {
                ...todo,
                id: ++Todo.currentId
            }
            setTodos([...todos, todoNew])
            setTodo({
                id: 0,
                name: "",
                type: "Important"
            });
        }

    }

    const handleEdit = (id) => {
        let objEdit = todos.find(td => td.id === id);
        setTodo({
            ...objEdit,
            isEdit: true
        });
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
