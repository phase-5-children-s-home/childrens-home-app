import React from 'react'
import { useState } from 'react'

const Form = () => {
   const [data, setData] = useState({name: "", email: "", phone: "", message: ""});
   const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setData({...data, [name]: value})
   }

   const handleSubmit = (e) =>{
      e.preventDefault()
      alert(data)
   }
    return (
        <form method='post' onSubmit={handleSubmit}>
            <h1>Contact <span>Here</span></h1>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='Enter your name' />
            <input type="text" name="name" id="" onChange={handleChange} value={data.email} placeholder='bella@gmail.com'/>
            <input type="text" name="name" id="" onChange={handleChange} value={data.phone} placeholder='+254'/>
            <textarea name="message" id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder='type here...'/>
            <button type='submit'>Send</button>
            <p>{data.name} {data.email} {data.phone} {data.message}</p>
        </form>
    )
}

export default Form 