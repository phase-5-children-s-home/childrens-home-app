import React from 'react'
import "./Navbar.css"


function Navbar({logout}) {
  return (
    <div className="navbar">
        <h1 className='title'>LetsCharity </h1> 
        <a href='/'>Home</a>
        {/* <a href='/login'>Login</a> */}
        <a href='/homelist'>List of homes</a>

        <a href='/donation'>Donations</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <button className='logout' onClick={logout}>Logout</button>'
    </div>
  )
}

export default Navbar