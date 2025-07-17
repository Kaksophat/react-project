// import React from 'react'
import "./css/loginsingup.css";
import React, { useState } from "react";

const Loginsingup = () => {
  const [state, setstate] = useState("login");
  const [formData, setformData] = useState({
    username: "", 
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const login = () => {
   const response = fetch("https://reactjs-e-comer-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });
    response.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Login failed");
      }
    }).then(data => {
      localStorage.setItem("Auth-Token", data.token);
      window.location.href = "/"; // Redirect to home page after successful login
    }).catch(error => {
      console.error("Error during login:", error);
    });    
  }

  const signup = () => {
   const response = fetch("https://reactjs-e-comer-backend.onrender.com/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
    });
    response.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Signup failed");
      }
    }
    ).then(data => {
      localStorage.setItem("Auth-Token", data.token);
      window.location.href = "/"; // Redirect to home page after successful signup
    }).catch(error => {
      console.error("Error during signup:", error);
    });

  }


  return (
    <>
      <div className="loginsingup">
        <div className="loginsingup-container">
          <h1>{state}</h1>
          <div className="loginsingup-filed">
            {state === "signup" ? (
              <input
                style={{ color: "black" }}
                type="text"
                name="username"
                placeholder="your name"
                value={formData.username}
                onChange={handleChange}
              />
            ) : (
              <></>
            )}

            <input
              style={{ color: "black" }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email address"
            />
            <input
              style={{ color: "black" }}
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button onClick={()=>{state==="login"?login():signup()}}>contiue</button>
          {state === "signup" ? (
            <p className="loginsing-login">
              have an account <span  onClick={() => setstate("login")} style={{color:"red"}}>Login here</span>
            </p>
          ) : (
            <p className="loginsing-login" onClick={() => setstate("signup")}>
             dont have account <span  onClick={() => setstate("login")} style={{color:"red"}}>Signup here</span> 
            </p>
          )}
          <div className="loginsing-agree">
            <input type="checkbox" name="" id="" />
            <p>By contiuing, i agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loginsingup;
