import React from 'react'
import { Link, Outlet, Routes, Route } from 'react-router-dom'
import BookApp from './BookApp'
import Expenses from './Expenses'
import Invoices from './Invoices'

export default function BookKeeper() {
    return (
        <Routes>
            <Route path="/book" element={<BookApp />} >
                <Route path='invoices' element={<Invoices />} />
                <Route path='expenses' element={<Expenses />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>

        </Routes>
    )
}
