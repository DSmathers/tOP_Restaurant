import React from 'react'

const ContactPage = () => {
    return (
        <section id="contact-page">
            <header>Contact Us</header>
            <address id="contact-info">
                <p className='contact-info-heads'>Address:</p>
                10101 N Winning Ave.<br />
                Portland, OR 97206<br />
                <br />
                <p className='contact-info-heads'>Phone Number:</p>
                503-555-5555<br />
                <p className='contact-info-heads'>Hours of Operation</p>
                Monday - Friday: 8AM - 10PM<br />
                Saturday: 10AM - 11PM<br />
                Sunday: Closed<br /> 

            </address>
        </section>
    )
}

export default ContactPage
