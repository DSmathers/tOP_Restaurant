import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id='app_head'>
            <nav id="navbar">
                <Link to="/" className="clickable_logo">The Restaurant</Link>
                <ul id="main_page_nav">
                    <li><Link to="/" className="main_nav_link">Home</Link></li>
                    <li><Link to="/menu" className="main_nav_link">Menu</Link></li>
                    <li><Link to="/contact" className="main_nav_link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
