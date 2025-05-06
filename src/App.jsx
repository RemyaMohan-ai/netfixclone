import React, { use, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'
import { ToastContainer, toast } from 'react-toastify';

export default function App() {

const navigate = useNavigate()

useEffect (()=>{
  onAuthStateChanged(auth, async(user)=>{
    if(user){
      console.log("logged in");
      navigate('/')
    }else{
      console.log("logged out");
      navigate('/login')

    }
  })
},[])
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route
         path='/'
         element ={<Home></Home>}
         />
        <Route
         path='/login'
         element ={<Login></Login>}
         />
        <Route
         path='/player/:id'
         element ={<Player></Player>}
         />
      </Routes>
    </div>
  )
}
