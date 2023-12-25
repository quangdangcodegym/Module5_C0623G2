import React, { useState } from 'react'

export default function EditCustomer({ customer, onHandleEditCustomer, onHandleCancelCustomer }) {
    const [customerEdit, setCustomerEdit] = useState(customer)

    const handleChange = (evt) => {
        setCustomerEdit({
            ...customerEdit,
            [evt.target.name]: evt.target.value
        })
    }



    return (
        <>
            <div>
                <div className='row mb-3'>
                    <div className='form-group col-6'>
                        <label className='form-label'>Fullname:</label>
                        <input name='fullName' onChange={handleChange} type='text' className='form-control' value={customerEdit.fullName} />
                    </div>
                    <div className='form-group col-6'>
                        <label className='form-label'>Age:</label>
                        <input name='age' onChange={handleChange} type='number' className='form-control' value={customerEdit.age} />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='form-group col-6'>
                        <label className='form-label'>Gender:</label>
                        <select name='gender' className='form-select' value={customerEdit.gender} onChange={handleChange}>
                            <option value="all">Please choose gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className='form-group col-6'>
                        <label className='form-label'>Address:</label>
                        <input name='address' onChange={handleChange} type='text' className='form-control' value={customerEdit.address} />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='form-group col-6'>
                        <label className='form-label'>Email:</label>
                        <input name='email' onChange={handleChange} type='text' className='form-control' value={customerEdit.email} />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='form-group col-6'>
                        <button className='btn btn-primary me-2' onClick={(e) => { onHandleEditCustomer(customerEdit) }} >Edit</button>
                        <button className='btn btn-dark' onClick={(e) => { onHandleCancelCustomer() }} >Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
