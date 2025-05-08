import React from 'react'
import Logo from "../../src/assets/logo.png"
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container">
    <div className="contactBox">
    <img src={Logo} />
    <h3>We're Coming Soon</h3>
    <hr/>
    <p>We're Currently working on this Page. Great things <br/> take  time to build. Stay tuned!</p>
    <Link to="/">Go Home</Link>
    </div>
    </div>
  )
}

export default Contact