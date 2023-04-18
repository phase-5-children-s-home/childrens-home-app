import './App.css';
import React, { useState } from 'react';
import { Login } from './components/Login';
import { Passwordreset } from './components/Passwordreset';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
import { Register } from './components/Register';
import { isUserLoggedIn } from './components/utils/Auth';
import DonationForm from './components/DonationForm';
import Homepage from './components/homepage';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const isLoggedIn = isUserLoggedIn();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/reset';

  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
    <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Passwordreset />} />
          <Route path="/" element={< Homepage />} />

          <Route path="/donations" element={<DonationForm />} />
        </Routes>
        {isLoginPage ? null : <Login/>||<Passwordreset/>}
      </div>
    </AuthProvider>
  );
}

export default App;