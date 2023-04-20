import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div className="navbar">
        <h1 className='title'>LetsCharity</h1> 
        <a href='/'>Home</a>
        <a href='/login'>Login</a>
        <a href='/donation'>Donations</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <a href='/homelist'>Homes</a>
    </div>
  )
}

export default Navbar