import React, {useState} from 'react';
import './App.css';
import { Login } from "./Login"
import { Passwordreset } from './Passwordreset';
import { Register } from "./Register"


function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className="App">
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      
    }

    <Passwordreset/>
      
    </div>
  );
}

export default App;
