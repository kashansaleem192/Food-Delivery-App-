import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home"
import About from './Component/About/About';
import Signup from './Component/SignUp/Signup';
import Login from './Component/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Order } from './Component/Order/Order';



function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
         <Route path='/' element={<Home/>}/>
           <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
           <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/order' element={<Order/>}/>
        </Routes>
      </BrowserRouter>

      

    </>
  )
}

export default App

