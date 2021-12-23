import React from 'react'
import { Link } from 'react-router-dom'
import pizza from '../../assets/pizza.jpg'

const OurPizza = () => {
    return (
        <section id="our-pizza" className="home-sections">
            <div id="our-pizza-image">
               <img src={pizza}></img>
            </div>
            <div id="our-pizza-text">
                <h2>Our Pizza</h2>
                <p>Our recipes are made from scratch, with fresh, local ingredients, 
                hand-rolled dough, and are made to order. 
                All of our recipes are unique and made in-house.</p>
                <Link to='/menu' className='menu-box-link'>Menu</Link>
            </div>
            
        </section>
    )
}

export default OurPizza
