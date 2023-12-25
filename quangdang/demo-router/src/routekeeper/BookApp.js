import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function BookApp() {
    return (
        <div>
            <nav>
                <Link to="/book/invoices">Invoices</Link> |{" "}
                {/* <Link to="/expenses">Expenses</Link> */}
                <NavLink to={"/book/expenses"} style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : ""
                    };
                }} >Expenses</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
