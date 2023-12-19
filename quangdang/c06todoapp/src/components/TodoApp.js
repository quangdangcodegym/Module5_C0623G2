import React, { useState } from 'react'
import Todo from './Todo';

import "./todo.css";
const initTodos = [
    new Todo(1, "Quang Dang", "VIP"),
    new Todo(2, "Quang Dang 12", "VIP"),
    new Todo(3, "Quang Dang 123", "Normal")

]
export default function TodoApp() {
    const [todos, setTodos] = useState(initTodos);
    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className='col-6 remove-padding'>
                    <h1>Todo App</h1>
                    <div className='row mb-3 '>
                        <label className='label-control mb-2'>Nhập name: </label>
                        <input className='form-control remove-margin' type="text" placeholder='Nhập name' />
                        <select className='form-control mt-2'>
                            <option>VIP</option>
                            <option>Normal</option>
                        </select>
                    </div>
                    <div className='row d-flex justify-content-center' >

                        <div className='row justify-content-between mb-5'>
                            <button className='col-2 btn btn-primary' >Add</button>
                            <div className='col-3'>
                                <select className='form-control'>
                                    <option>VIP</option>
                                    <option>Normal</option>
                                </select>
                            </div>
                        </div>
                        {
                            todos.map((todo) => (
                                <div className='row mb-2' key={todo.id}>
                                    <div className='col-8'>{todo.id} - {todo.name} - {todo.type}</div>
                                    <div className='col-4 row justify-content-end remove-padding'>
                                        <button className='col-5 btn btn-primary me-2'>Edit</button>
                                        <button className='col-5 btn btn-primary'>Delete</button>
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
