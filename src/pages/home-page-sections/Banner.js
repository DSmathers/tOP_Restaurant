import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section id="banner" className="home-sections">
            <h2>LOGO</h2>
            <h1>Pizza made from scratch!</h1>
            <h2>A real Humdinger!</h2>
            <Link to='/menu' className='menu-box-link'>Menu</Link>
        </section>
    )
}

export default Banner
