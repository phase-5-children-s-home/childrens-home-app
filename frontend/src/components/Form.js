import React from 'react'
import './contact.css'
// import { useState } from 'react'

const Form = () => {
//    const [data, setData] = useState({name: "", email: "", phone: "", message: ""});
//    const handleChange = (e) =>{
//       const name = e.target.name;
//       const value = e.target.value;
//       setData({...data, [name]: value})
//    }

//    const handleSubmit = (e) =>{
//       e.preventDefault()
//       alert(data)
//    }
    return (
        // <form method='post' onSubmit={handleSubmit}>
        //     <h1>Contact <span>Here</span></h1>
        //     <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='Enter your name' />
        //     <input type="text" name="name" id="" onChange={handleChange} value={data.email} placeholder='bella@gmail.com'/>
        //     <input type="text" name="name" id="" onChange={handleChange} value={data.phone} placeholder='+254'/>
        //     <textarea name="message" id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder='type here...'/>
        //     <button type='submit'>Send</button>
        //     <p>{data.name} {data.email} {data.phone} {data.message}</p>
        // </form>
        <div>
            <section class="body">
                <div class="contact-container">
                    <div class="form-container">
                        <h3>Contact Us</h3>
                        <form action="" class="contact-form">
                            <input type="text" placeholder="Your Name" required/>
                            <input type="email" name="" id="" placeholder="Enter your Email..." required/>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Write your message here" required></textarea>
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