import React, {useState} from 'react';
import './App.css';
import { Login } from "./Login"
import { Passwordreset } from './Passwordreset';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Register } from "./Register"


function App() {
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register'|| location.pathname === '/reset';

  
  return (
    <div className="App">
    <Routes>
          <Route path='/login' element={<Login
           setIsLoggedIn={setLoggedIn}/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/reset' element={<Passwordreset/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
