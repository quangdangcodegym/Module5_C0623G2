import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function List({ customers }) {
    const navigate = useNavigate();
    return (
        <table className='table table-borderd'>
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
                    customers?.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.fullName}</td>
                            <td>{c.gender}</td>
                            <td>{c.address}</td>
                            <td>{c.age}</td>
                            <td>
                                <a className='btn btn-danger me-2' onClick={(evt) => navigate(`/customer/edit/${c.id}`)}> <i class="fa-solid fa-pen-to-square"></i></a>
                                <a className='btn btn-dark'> <i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                    ))

                }
            </tbody>
        </table>
    )
}
