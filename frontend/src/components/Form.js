// import React from 'react'
import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Modal } from 'react-bootstrap';


const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3r43hou', 'template_nwcikqk', form.current, 'wM-qFcL37rY28JW-v')
        .then((result) => {
            console.log(result.text);
            console.log("meesage sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
            <section class="body">
                <div class="contact-container">
                    <div class="form-container">
                        <h3>Contact Us</h3>
                        <form ref={form} onSubmit={sendEmail} action="" class="contact-form">
                            <input nam="user_name" type="text" placeholder="Your Name" required/>
                            <input type="email" name="" id="user_email" placeholder="Enter your Email..." required/>
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Write your message here" required></textarea>
                            <input type="submit" value="Send" class="send-button"/>
                        </form>
                    </div>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790610042135!2d36.78203177554953!3d-1.3004861986871605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1682694457578!5m2!1sen!2ske"  style={{margin: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Form 