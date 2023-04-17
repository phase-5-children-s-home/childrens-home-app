import React, {useState} from "react"
export const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [username, setUserName] = useState('')

    const handleSumbit = () => {
        email.preventDefault()
        console.log(email);
    }
    return(
        <div className="auth-form-container">
          <h2>Register</h2>
        <form className="register-form" onSubmit={handleSumbit}>
            <label form="username">Username</label>
            <input value={username} name="username" onChange={(e) => setUserName(e.target.value)} id="username" placeholder="username"/>
            <label form="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label form="pasword">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*******" id="password" name="password" />
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account?Login here</button>
        </div>
    )
}