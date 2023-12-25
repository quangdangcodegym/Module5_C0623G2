import React from 'react'
import Category from './Category';
import { Route, Routes } from 'react-router-dom';
import Product from './Product';

export default function Route2() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/product/:categoryId" element={<Product />} />
            </Routes>
        </>

    )
}
