
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../Login/login.css"
import { useNavigate } from "react-router-dom";



const Login = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Data:", formData);
    navigate("/home");
  };
  return (
    <div><h1 className='text-center mt-5 login'>Login</h1>

      <div className='login-form d-flex  justify-content-center align-items-center '>
        <form onSubmit={handleSubmit} className='d-flex flex-column w-25 border py-4 px-3 rounded-2 ' action="">
          
        <input name="email" value={formData.email}  onChange={handleChange} placeholder='Email' required type="email" />
        
        <input name="password" value={formData.password}  onChange={handleChange} placeholder='Password' required type="password" />
        <button type='submit' > Login </button>
       <div className='d-flex'>
          <p>Don't have an account? please</p> <Link className='text-primary ms-1' to="/signup">Sign UP</Link>
       </div>

        </form>
      </div>
    </div>
  )
}

export default Login