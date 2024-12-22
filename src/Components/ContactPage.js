import React from 'react'
import ContactUs from './ContactUs'
import Footer from './Footer'
import '../Components/ContactPage.css';

function ContactPage() {
    return (
        <>
            <ContactUs />
            <div className='location'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220090.34925961788!2d83.09777686558182!3d17.738930448395546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1734600280157!5m2!1sen!2sin" width="100%" height="510" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default ContactPage
