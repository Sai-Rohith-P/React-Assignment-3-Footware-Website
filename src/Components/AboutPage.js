import React from 'react'
import AboutUs from './AboutUs'
import DeliveryLine from './DeliveryLine'
import Footer from './Footer'
import '../Components/AboutUs.css'
import Delivery from './Delivery'
import ContactPage from './ContactUs'

function AboutPage() {
    return (
        <>
            <AboutUs />
            <Delivery />
            <ContactPage />
            <Footer />
        </>
    )
}

export default AboutPage
