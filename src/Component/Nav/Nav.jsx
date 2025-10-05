import React from 'react'
import { Link } from "react-router-dom";
import "../Nav/nav.css"
const Nav = () => {
  return (
    <>
    <nav>
        <ul>
            <li className='logo'><Link to="/">DineDash<i className="fa-solid fa-utensils"></i></Link></li>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/about"> About</Link></li>
            <li><Link to="/login"> Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </ul>
    </nav>
    
     </>
  )
}

export default Nav