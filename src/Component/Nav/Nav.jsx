import React from 'react'
import { Link } from "react-router-dom";
import "../Nav/nav.css"
const Nav = () => {
  return (
    <>
    <nav className='navbar '>
        <ul>
            <li ><Link to="/"><img className='logo' src="/Logo.png" alt="Nav-Logo" /></Link></li>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/about"> About</Link></li>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/order">Order Now</Link></li>
        </ul>
    </nav>
    
     </>
  )
}

export default Nav