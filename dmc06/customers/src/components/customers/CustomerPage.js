import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import CustomersPage from './CustomersPage';
import CreateCustomerPage from './CreateCustomerPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CustomerPage() {
    return (
        <>
            <Outlet />
            <ToastContainer />
        </>
    )
}
