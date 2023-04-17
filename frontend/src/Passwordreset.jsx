import React, {useState} from "react"
import { useNavigate} from "react-router-dom";

export const Passwordreset = (props) => {
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    let navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch('https://backend-dc1w.onrender.com/users/reset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        })
        .then(response => {
          if (response.ok) {
            navigate("/login");
          } else {
            response.json().then((err)=>setErrors([err.errors]))
          }
          setLoading(false)
        }) 
    }
    console.log(errors)
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        }
    return(
        <div className="form">
        <div className="auth-form-container">
        <h2>Password Reset</h2>
        <form className="passwordreset-form" onSubmit={handleSumbit}>
            <label className="label" form="email">email</label>
            <input className="input" value={formData.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="label" form="pasword">password</label>
            <input className="input" value={formData.password} onChange={handleChange}type="password" placeholder="*******" id="password" name="password" />
            { loading ? (<div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> ): (
                        <button className="login" type="submit">Reset Password</button>
                        )
            }
         {/* {Object.keys(errors).length > 0 &&
            Object.entries(errors).map(([key, value]) => {
              return value.map((error, index) => (
                <div key={`${key}-${index}`} className="text-danger">
                  {error}
                </div>
              ));
            })} */}
            {errors.length > 0 && (
                <div className="text-danger">
                {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
            )}
        </form>
        </div>
        </div>
    )
}