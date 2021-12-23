import React from 'react'
import { Link } from 'react-router-dom'

const MainSectionThree = () => {
    return (
        <section className="home-sections" id="home-section-3">
            <h2>Established 2021</h2>
            <ul>
                <li>Take Out</li>
                <li>Outdoor Patio</li>
                <li>or Dine In</li>
            </ul>
            <Link to='/' id="order-now-box-link">Order Now</Link>
        </section>
    )
}

export default MainSectionThree
