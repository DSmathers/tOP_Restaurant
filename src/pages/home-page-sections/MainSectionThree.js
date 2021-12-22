import React from 'react'
import { Link } from 'react-router-dom'

const MainSectionThree = () => {
    return (
        <section className="home-sections">
            <Link to='/menu' className='menu-box-link'>Menu</Link>
            <h2>We Dare You To Order</h2>
            <h1>The Big One</h1>
            <p>Our biggest pie is 24 inches! It's a real Humdinger! 
            If you can eat the entire thing in one sitting you get a prize 
            and we'll take a photo of you for the gram.</p>
        </section>
    )
}

export default MainSectionThree
