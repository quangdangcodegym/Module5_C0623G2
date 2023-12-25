import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        fullName: yup.string().required("Full name is required").min(5, "Min 5 characters").max(30, "Max 30 characters"),
        age: yup.number()
            .positive()
            .integer()
            .required()
            .typeError("Invalid type age"),

        gender: yup.string().required("Gender is required"),
        email: yup.string().required("Email is required").email("Email is not valid"),
        email: yup.string().required("Address is required"),
    })
    .required()
export default function CreateCustomerPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        firstError: "firstError"
    })




    const handleCancelCustomer = (evt) => {
        evt.preventDefault();
        navigate("/");
    }
    const navigate = useNavigate();


    const onSubmit = (data) => {
        data.password = "123123";
        fetch("https://6582744002f747c8367964f7.mockapi.io/customers", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((dataCustomers) => {
                toast("Create customer susscess!", {
                    autoClose: 1000
                })
                navigate("/customer");
            })
            .catch((err) => {
                toast("Error create customer!", {
                    autoClose: 1000
                })
            });
    }
    return (
        <>
            <div className='container justify-content-center'>
                <div className=''>
                    <div className='menu-head row mb-5 mt-5 justify-content-between'>
                        <img src='https://cdn.codegym.vn/wp-content/uploads/2021/08/CodeGym-Logo.webp' className='col-3' />
                    </div>
                    <div className='main-customer row'>
                        <div className='col-3'>
                            <img className='mw-100' src='https://static.hieuluat.vn/uploaded/Images/Original/2022/10/25/Ngon-ngu-lap-trinh-la-gi-2_2510102634.jpg' />
                        </div>
                        <div className='main col-8'>

                            <h3>Create Customer</h3>
                            <form className={`border p-3 rounded need-validation`} onSubmit={handleSubmit(onSubmit)}>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <label className='form-label'>FullName: </label>
                                        <input name="fullName" {...register("fullName", { required: true })} type='text' className={`form-control ${errors?.fullName && 'is-invalid'}`} />
                                        {errors?.fullName?.message && (
                                            <div class="invalid-feedback"> {errors.fullName.message}</div>
                                        )}
                                    </div>
                                    <div className='col-6'>
                                        <label className='form-label'>Email: </label>
                                        <input name="email" {...register("email")} type='text' className={`form-control ${errors?.email && 'is-invalid'}`} />
                                        {errors?.email?.message && (
                                            <div class="invalid-feedback"> {errors.email.message}</div>
                                        )}
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <label className='form-label'>Age: </label>
                                        <input name="age" {...register("age")} type='number' className={`form-control ${errors?.age && 'is-invalid'}`} />
                                        {errors?.age && (
                                            <div class="invalid-feedback"> {errors.age.message}</div>
                                        )}
                                    </div>
                                    <div className='col-6'>
                                        <label className='form-label'>Gender: </label>
                                        <select va {...register("gender")} name='gender' className={`form-select ${errors?.gender && 'is-invalid'}`}>
                                            <option value="">Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        {errors?.gender && (
                                            <div class="invalid-feedback"> {errors.gender.message}</div>
                                        )}
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <label className='form-label'>Address: </label>
                                        <input name="address" {...register("address")} type='text' className={`form-control ${errors?.age && 'is-invalid'}`} />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <button className='btn btn-primary me-2' >Create</button>
                                    <button className='btn btn-dark' onClick={handleCancelCustomer}>Cancel</button>
                                </div>
                            </form >
                        </div>
                    </div>
                </div >
            </div >

        </>

    )
}
