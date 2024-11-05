// import React from 'react'
import { useState } from "react"
import "./css/loginsingup.css"

 const Loginsingup = () => {
  const [state,setstate]= useState("Login")
  const [fromdata,setfromdata]= useState({
    username:"",
    email:"",
    password:""
  })

  const changehandle=(e)=>{
    setfromdata({...fromdata,[e.target.name]:e.target.value})
  }

  const Login = async()=>{
    try {
      let signupResponse = await fetch("https://reactjs-e-comer-backend.onrender.com/login",{
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fromdata),
      })
      if (signupResponse.status === 200) {
        let signupJson = await signupResponse.json();
        localStorage.setItem('Auth-Token', signupJson.token);
        console.log("Token stored:", signupJson.token);
        window.location.replace('/');
    } else {
      let errorJson = await signupResponse.json();
      console.error("Signup error:", errorJson.error);
      alert("Signup error: " + errorJson.error);
    }

    
    } catch (error) {
      console.log(error);
    }
  }
  const Signup = async()=>{
        try {
          let signupResponse = await fetch("https://reactjs-e-comer-backend.onrender.com/signup",{
            method: 'POST',
            headers: {
              Accept: 'application/form-data',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fromdata),
          })
          if (signupResponse.status === 200) {
            let signupJson = await signupResponse.json();
            localStorage.setItem('Auth-Token', signupJson.token);
            console.log("Token stored:", signupJson.token);
            window.location.replace('/');
        } else {
          let errorJson = await signupResponse.json();
          console.error("Signup error:", errorJson.error);
          alert("Signup error: " + errorJson.error);
        }

        
        } catch (error) {
          console.log(error);
        }
  }
  return (
    <>
      <div className="loginsingup">
          <div className="loginsingup-container">
            <h1>{state}</h1>
            <div className="loginsingup-filed">
              {state==="Sign up"?<input value={fromdata.username} onChange={changehandle} style={{color:"black"}} type="text" name="username" placeholder="your name" />:<></>}
              <input value={fromdata.email} onChange={changehandle} style={{color:"black"}} type="email" name="email" placeholder="email address" />
              <input value={fromdata.password} onChange={changehandle} style={{color:"black"}} type="password" name="password" placeholder="password" />
            </div>
            <button onClick={()=>{state==="Login"?Login():Signup()}}>contiue</button>
            {state==="Sign up"?
            <p className="loginsing-login">Already have an account <span onClick={()=>{setstate("Login")}}>login here</span></p>
            :<p className="loginsing-login">Create an account <span onClick={()=>{setstate("Sign up")}}>Click here</span></p>} 
            <div className="loginsing-agree">
              <input type="checkbox" name="" id="" />
              <p>By contiuing, i agree to the terms of use & privacy policy</p>
            </div>
          </div>
      </div>
    </>
  )
}
export default Loginsingup
