import React from 'react'
import "./Navbar.css"
import log from './images/log.png'




function Navbar({logout}) {
  return (
    <div className="navbar">
        <img src={log} alt="logo" />
        <h1 className='title'>LetsCharity </h1> 
        <a href='/'>Home</a>
        {/* <a href='/login'>Login</a> */}
        <a href='/homelist'>List of homes</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <a href='/donation'>Donations</a>
        <button className='logout' onClick={logout}>Logout</button>'
    </div>
  )
}

export default Navbar