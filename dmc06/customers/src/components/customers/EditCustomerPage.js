import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
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
export default function EditCustomerPage() {

    const a = useForm({
        resolver: yupResolver(schema),
    });
    console.log(a.formState);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const param = useParams();

    const { customerId } = param;

    console.log("watch", watch);
    useEffect(() => {
        console.log(customerId);
        fetch(`https://6582744002f747c8367964f7.mockapi.io/customers/${customerId}`)
            .then((res) => res.json())
            .then((data) => {
                setValue("email", data.email)
                setValue("fullName", data.fullName)
                setValue("age", data.age)
                setValue("gender", data.gender)
                setValue("address", data.address)
            })


    }, [])

    const onSubmit = (data) => {
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

                            <h3>Edit Customer</h3>
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
                                    <button className='btn btn-dark' >Cancel</button>
                                </div>
                            </form >
                        </div>
                    </div>
                </div >
            </div >

        </>
    )
}
