import React from 'react'
import { Link } from "react-router-dom";
import "../Footer/footer.css"
export const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-content mt-5 bg-dark d-flex justify-content-center gap-5  pt-4 text-light'>
                    <div className='logo-sec m-5'> 
                        <img className='footer-logo' src="/Logo.png" alt="Website Logo" />
                        <p>Fresh, Fast, and Delicious — Every Time!</p>
                    </div>

                    <div className='footer-links m-5'>
                        <h4>Quick Links</h4>
                        <ul className='d-flex flex-column'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/order">Order Now</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login">Sign IN</Link></li>
                        </ul>

                    </div>

                    <div className="footer-contact m-5">
                        <h4>Contact Us</h4>
                        <p>📍 Karachi, Pakistan</p>
                        <p>📞 +92 300 1234567</p>
                        <p>✉️ support@DineDash.com</p>
                    </div>
 </div>
                    <div className="footer-bottom bg-dark text-light border-top p-4">
                        <p>© {new Date().getFullYear()} DineDash | All Rights Reserved </p>
                    </div>
               
            </footer>
        </>
    )
}
