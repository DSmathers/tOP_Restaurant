import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MenuPage from '../pages/MenuPage'
import ContactPage from '../pages/ContactPage'
import GiftCards from '../pages/GiftCards'

const Body = ({}) => {
    return (
        <main id="main_view">
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path='/' element={<HomePage sections='' />} />
                <Route path='/gift-cards' element={<GiftCards />} />
                <Route path='/menu' element={<MenuPage items='' />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </main>
    )
}

export default Body
