import React from 'react'

export default function ListCustomer({ customers, onEditCustomer }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fullname</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((c) => (
                        <tr>
                            <td>{c.id}</td>
                            <td>{c.fullName}</td>
                            <td>{c.gender}</td>
                            <td>{c.address}</td>
                            <td>{c.age}</td>
                            <td>
                                <button className='btn btn-primary me-2' onClick={(evt) => onEditCustomer(c.id)}>Edit</button>
                                <button className='btn btn-warning'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
