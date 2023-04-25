import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveUser, storeToken } from "./utils/Auth";

export const Login = ({ setIsLoggedIn }) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://childrens-home-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          response.json().then((err) => setErrors(err.errors));
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        setLoading(false);
        // Store session ID in browser storage
        saveUser(data.data.user.id);
        storeToken(data.data.token);
        // Clear the form data
        document.getElementById("login-form").reset();
        // Set the logged in state to true
        setIsLoggedIn(true);
        // Navigate to the home page or admin page depending on the email and password
        if (
          formData.email === "admin@letscharity.com" &&
          formData.password === "1234"
        ) {
          navigate("/adminnav");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (
    <div className="form">
      <div className="auth-form-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSumbit} id="login-form">
          <label className="label" htmlFor="email">
            email
          </label>
          <input
            className="input"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label className="label" htmlFor="password">
            password
          </label>
          <input
            className="input"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          {loading ? (
            <div className="d-flex align-items-center">
              <strong>Please Wait...</strong>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          ) : (
            <button className="login" type="submit">
              Login
            </button>
          )}
           {Object.keys(errors).length > 0 &&
            Object.entries(errors).map(([key, value]) => {
              return value.map((error, index) => (
                <div key={`${key}-${index}`} className="text-danger">
                  {error}
                </div>
              ));
            })}
           <Link className="login-links" to="/reset"  ><p id="link-btn" >Forgot your password? Reset here</p></Link>
        <Link className="login-links" to="/register"  ><p id="link-btn" >Don't have an account?Register here</p></Link>
        </form>

        </div>
        </div>
    )
}