import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MenuPage from '../pages/MenuPage'
import ContactPage from '../pages/ContactPage'

const Body = () => {
    return (
        <main id="main_view">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tOP_Restaurant"  element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path='/menu' element={<MenuPage/>} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </main>
    )
}

export default Body
