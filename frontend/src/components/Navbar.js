import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './images/logo.png'
import './Navbar.css'
import { removeUser, removeUserToken, getToken} from "./utils/auth";

function Navbar({isLoggedIn,setIsLoggedIn}){
  let navigate = useNavigate();
  let token = getToken()
  
  function handleLogout() {
    fetch("https://childrens-home-backend.onrender.com/", {
      method: "DELETE",
    }).then(() => {
      removeUser();
      removeUserToken();
      setIsLoggedIn(false);
      token = null
    })
      // token = null
  }
  function handleLogin() {
      if(token !== null){
      setIsLoggedIn(true)
      navigate("/profile");
      }
  }
  function handleLoginProfile() {
    if (isLoggedIn === false && token === null) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  }
  console.log(isLoggedIn)
  console.log(token)
    return(
        <div>
            {/* <nav className="navbar bg-dark" >
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-bg-dark">KenyaFlix</span>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
         {/* <img src={logo} alt="logo" style={{ width: "100px", height: "100%", position: "absolute", top: 0, left: 0 }} /> */}
          <Link className="navbar-brand" href="#">
            KenyaFlix
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videos">
                  Videos
                </Link>
              </li>
              <li className="nav-item" onClick={handleLoginProfile}>
                <Link className="nav-link" to="/profile" >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
              {!isLoggedIn?(
                <Link className="nav-link" to="/login" onClick={handleLogin}>
                  Login 
                </Link>
              ):(
                <Link className="nav-link" to="/profile" onClick={handleLogout}>
                  Log out
                </Link>
              )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
    
}

export default Navbar