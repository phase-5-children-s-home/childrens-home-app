import React, {useState} from "react"
export const Passwordreset = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSumbit = () => {
        email.preventDefault()
        console.log(email);
    }
    return(
        <div className="auth-form-container">
        <h2>Password Reset</h2>
        <form className="passwordreset-form" onSubmit={handleSumbit}>
            <label form="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label form="pasword">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*******" id="password" name="password" />
            <button type="submit">Reset password</button>
        </form>
        </div>
    )
}