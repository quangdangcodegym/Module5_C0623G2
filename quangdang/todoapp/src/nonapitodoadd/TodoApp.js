import React, { useState } from 'react'
import Todo from './Todo.js';

import "./todo.css";

const initTodos = [
    new Todo(1, "Quang Dang", "VIP"),
    new Todo(2, "Quang Dang 12", "VIP"),
    new Todo(3, "Quang Dang 123", "Normal")

]

export default function TodoApp() {
    const [showModal, setShowModal] = useState(false);

    const handleShowAddTodo = (evt) => {
        setShowModal(true);
    }
    const handleClosing = () => {
        setShowModal(false);
    }
    const [todo, setTodo] = useState({
        id: 0,
        name: "",
        type: "VIP"
    })
    const [todos, setTodos] = useState(initTodos);
    const handleTypeChange = (evt) => {
        setTodo({ ...todo, type: evt.target.value })
    }

    const handleAddTodo = () => {
        // todo.id = ++Todo.currentId;
        let objCopy = {
            ...todo,
            id: ++Todo.currentId
        }
        setTodos([...todos, objCopy]);
        handleClosing();
    }
    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className='col-6'>
                    <h1>Todo App</h1>
                    <div className='row justify-content-between mb-5'>
                        <button className='col-2 btn btn-primary' onClick={handleShowAddTodo}>Add</button>
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
            {
                showModal && (
                    <div className="modal" id="myModal" style={{ display: 'block' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Thêm việc cần làm</h4>
                                    <button onClick={handleClosing} type="button" className="btn-close" data-bs-dismiss="modal" />
                                </div>
                                <div className="modal-body">
                                    <input className='form-control mb-2' value={todo.name} type='text' placeholder='Enter todo' onChange={(evt) => { setTodo({ ...todo, name: evt.target.value }) }} />
                                    <select className='form-control mb-2' onChange={handleTypeChange}>
                                        <option>VIP</option>
                                        <option>Normal</option>
                                    </select>

                                    <button className='btn btn-primary' onClick={handleAddTodo}>Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    )
}
