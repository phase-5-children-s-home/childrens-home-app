import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
import './Signup.css'

function Signup(){

    const SIGNUP_URL = 'https://palm-gym-api.onrender.com/signup'
    // const navigate = useNavigate()

    const[full_name,setFullName] = useState('')
    const[user_name,setUserName] = useState('')
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const [errors, setErrors] = useState([]);
    const [signedup,setSignedup] = useState(false)

    const formdata = {
        "full_name":full_name,
        "user_name":user_name,
        "email":email,
        "password":password
    }

    function handleSubmit(e){
        e.preventDefault()
        // console.log(formdata)
        

        fetch(SIGNUP_URL,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(formdata)
        }).then((response) => {
            if (response.ok){
                response.json().then(() => {
                    setSignedup(true)
                    alert("signup was successful")
                    // navigate('/login')
                   
                });
            }else{
                response.json().then((errorMessage) => 
                {
                    setErrors(errorMessage.errors)
                    alert('Invalid username or password')
                } )
            }
        })

        
    }

    return (
        <div id="signup_home"> 
        <div id="sign-up" >
        <form className="card container mt-5" onSubmit={(e) => handleSubmit(e)}  >
          <h4 className="card-header">New  Member</h4>
          <label htmlFor="name">Full Name: </label>
          <input id="inputs"  type="text" name="full_name" onChange={(e) => setFullName(e.target.value)} />
          <label htmlFor="name">User Name: </label>
          <input id="inputs"  type="text" name="user_name" onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="email">Email: </label>
          <input id="inputs"  type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password: </label>
          <input id="inputs"  type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
          <input id="submit" class="btn btn-success"  type="submit" value="Join Kenya childrens home" />
         </form>
        </div>
           
         <img id="signup-img"
        className="login__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWhrJMjTa6JHKeECanZYnU82Wqm-i5zx06A&usqp=CAU"
      />
        </div>
    )
}

export default Signup