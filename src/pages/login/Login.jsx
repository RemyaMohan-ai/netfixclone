import React, { useState } from 'react'
import "./Login.css"
import logo from '../../assets/logo.png'
import {login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'


export default function Login() {
  const[signState , setSignState] = useState("Sign In")
  const[name, setName] = useState("")
  const[email, setEmial] = useState("")
  const[password, setpassword] = useState("")
  const [loading , setLoading] = useState(false)

const userAuth = async(event)=>{
  event.preventDefault()
  setLoading(true)
  if(signState === "Sign In"){
    await login(email, password)
  }else{
    await signup(name , email , password)
  }
  setLoading(false)
}

  return (
    loading?<div className="loading-spinner"><img src={netflix_spinner} alt="" /></div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState=="Sign Up"&&  <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} id="" placeholder='your name' />}

          <input type="email" value={email} id="" placeholder='your email' onChange={(e)=>{setEmial(e.target.value)}} />

          <input type="password" id="" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

          <button onClick={userAuth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState=="Sign Up"?<p>Already have an Account? <span onClick={(()=>{
            setSignState("Sign In")
          })}>Sign In </span></p>:<p>New to Netflix? <span onClick={(()=>{
            setSignState("Sign Up")
          })}>Sign Up </span></p>
          }
        </div>
      </div>
    </div>
  )
}
