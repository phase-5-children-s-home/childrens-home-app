import React, {useState, useEffect} from "react"
import { useNavigate,Link } from "react-router-dom";

export const Register = (props) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username:'',
        email: "",
        password: "", 
      });
    
      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
    let navigate = useNavigate();
    
    useEffect(() => {
      console.log(loading);
    }, [loading])
    const handleSumbit = (e) => {
        e.preventDefault()
        fetch('https://backend-dc1w.onrender.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        })
        .then(response => {
          if (response.ok) {
            navigate("/login");
          } else {
            response.json().then((err)=>setErrors(err.errors))
          }
          setLoading(false)
        }) 
    }
    return(
        <div className="form">
        <div className="auth-form-container">
          <h2>Register</h2>
        <form className="register-form" onSubmit={handleSumbit}>
            <label  className="label" form="username">Username</label>
            <input className="input" value={formData.username} name="username" onChange={handleChange} id="username" placeholder="username"/>
            <label className='label' form="email">email</label>
            <input className="input" value={formData.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="label" form="pasword">password</label>
            <input className="input" value={formData.password} onChange={handleChange}type="password" placeholder="*******" id="password" name="password" />
            { loading ? (<div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> ): (
                        <button className="login" type="submit">Register</button>
                        )
            }
         {Object.keys(errors).length > 0 &&
            Object.entries(errors).map(([key, value]) => {
              return value.map((error, index) => (
                <div key={`${key}-${index}`} className="text-danger">
                  {error}
                </div>
              ));
            })}
        </form>
        <Link to="/login"><p id="link-btn" >Already have an account?Login here</p></Link>
        </div>
        </div>
    )
}