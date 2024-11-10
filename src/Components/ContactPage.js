import React from 'react'
import './ContactPage.css'

function ContactPage() {
    return (
        <div className='main d-flex'>
            <div className='ContactPage d-flex m-auto flex-lg-row flex-md-column flex-sm-column align-items-center justify-content-evenly'>
                <div className='contacttext'>
                    <div className='te'><h2>Let's Chat</h2>
                        <p>Whether you have a question, want to
                            start a project or simply want to connect.</p>
                        <p>Feel free to send me a message in the
                            contact form</p></div>
                </div>
                <div className='formdata'>
                    <h3 className='contact'>Contact</h3>
                    <div className='inputs'>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Phone' />
                        <textarea name="text" placeholder='Message' id="" rows={4} cols={10}></textarea>
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
