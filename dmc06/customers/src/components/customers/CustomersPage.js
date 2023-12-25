import React from 'react'
import List from './List'
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
export default function CustomersPage() {
    const [customers, setCustomers] = useState([]);
    const [filter, setFilter] = useState({
        kw: "",
        gender: "all",
        age: "10-30",
        page: 1,
        pageSize: -1,
        limit: 5,
        loading: false
    });

    useEffect(() => {
        setFilter({
            ...filter,
            loading: true
        })
        fetch("https://6582744002f747c8367964f7.mockapi.io/customers")
            .then((res) => {
                return res.json();
            })
            .then((dataCustomers) => {
                console.log(filter);
                let results = dataCustomers.filter(c => {
                    let from = parseInt(filter.age.split('-')[0]);
                    let to = parseInt(filter.age.split('-')[1]);

                    console.log(from, to, c.age);
                    if ((c.gender == filter.gender || filter.gender == "all") && (from <= c.age && c.age <= to)
                        && c.fullName.includes(filter.kw)) {
                        return c;
                    }
                });
                setCustomers(results);
                setFilter({
                    ...filter,
                    loading: false
                })
            });
    }, [filter.gender, filter.age, filter.kw])


    const handleChange = (evt) => {
        setFilter(
            {
                ...filter,
                [evt.target.name]: evt.target.value
            })
    }
    const handleSearchChange = (evt) => {
        console.log("handleSearchChange", evt.target.value);
        setFilter(
            {
                ...filter,
                [evt.target.name]: evt.target.value
            })
    }
    const onSaveCustomer = (customer) => {

    }

    return (
        <>
            <div className='container justify-content-center'>
                <div className=''>
                    <div className='menu-head row mb-5 mt-5 justify-content-between'>
                        <img src='https://cdn.codegym.vn/wp-content/uploads/2021/08/CodeGym-Logo.webp' className='col-3' />
                        <div className='form-group col-3'>
                            <input name='kw' onInput={handleSearchChange} className='form-control' type='text' placeholder='Search...' />
                        </div>
                    </div>
                    <div className='main-customer row'>
                        <div className='left-sidebar col-3'>
                            <div class="d-grid">
                                <button class="btn btn-primary" type="button">Create</button>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Gender:</label>
                                <select name='gender' className='form-select' onChange={handleChange}>
                                    <option value={"all"}>All</option>
                                    <option value={"male"}>Nam</option>
                                    <option value={"female"}>Nữ</option>
                                </select>
                            </div>
                            <div>
                                <label className='Age:'>Age:</label>
                                <div class="form-check">
                                    <input class="form-check-input" checked={filter.age === "10-30" ? true : false} type="radio" value={"10-30"} name="age" id="age10" onChange={handleChange} />
                                    <label class="form-check-label" for="age10">
                                        10 - 30
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" checked={filter.age === "30-50" ? true : false} type="radio" value={"30-50"} name="age" id="age30" onChange={handleChange} />
                                    <label class="form-check-label" for="age30">
                                        30 - 50
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" checked={filter.age === "50-70" ? true : false} type="radio" value={"50-70"} name="age" id="age50" onChange={handleChange} />
                                    <label class="form-check-label" for="age50">
                                        50 - 70
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" checked={filter.age === "70-100" ? true : false} type="radio" value={"70-100"} name="age" id="age70" onChange={handleChange} />
                                    <label class="form-check-label" for="age70">
                                        70 - 100
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='main col-8'>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                                {filter.loading && <Spinner animation="border" />}
                            </div>
                            <List customers={customers} />
                            <nav aria-label="Page navigation example" className='d-flex justify-content-end'>
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
