import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login';
import { Passwordreset } from './components/Passwordreset';

import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
import { Register } from './components/Register';
import { isUserLoggedIn } from './components/utils/Auth';
// import DonationForm from './components/DonationForm';
import Homepage from './components/homepage';
import Navbar from './components/Navbar';
import HomeList from './components/Homelist';
import Form from './components/Form';
import About from './components/About';
import ReviewForm from './components/Review'
import BookVisitForm from './components/Booksession'

import AdminNav from './components/Admin/AdminNav'

import Success from "./components/Success"
import Cancel from "./components/Cancel"
import Checkout from "./components/Checkout";



import Footer from './components/Footer'


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = isUserLoggedIn();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/reset';
  
  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/login');
  }

  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      {isLoginPage ? null : <Navbar logout={logout}/>}
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Passwordreset />} />

          <Route exact path="/" element={loggedIn ? < Homepage /> : <Navigate to="/login" />} />
          <Route path='/homelist' element={loggedIn ? <HomeList/> : <Navigate to="/login" />}/>    
          <Route path="/about" element={<About />} />
          

          <Route path="/contact" element={<Form />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/bookvisit" element={<BookVisitForm />} />
          <Route path="/adminnav" element={<AdminNav />} />
          


          <Route path="/donation" element={loggedIn ? < Checkout /> : <Navigate to="/login"/>} />
          <Route path="success" element={<Success/>} />
          <Route path="cancel" element={<Cancel/>} />

          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </div>
 
      <Footer/>
    </AuthProvider>
  );
}

export default App;