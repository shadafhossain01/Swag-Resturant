import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoMedium } from "react-icons/io5";
import { Link } from 'react-router-dom';

class About extends React.Component{
  render(){
    return(
      <div className='container'>
      <div className='about-box'>
      <div className='left-about'>
      <h2>About Me</h2>
      <img/>
      <p>Full Stack Developer</p>
       <Link to="https://www.linkedin.com/in/shadafhossain01/" target='_blank'>  <FaLinkedin style={{color:"#0A66C2"}}/>  </Link>
        <Link to="https://www.behance.net/shadafhossain01" target='_blank'> <FaBehanceSquare style={{color:"#0156FF"}}/> </Link>
        <Link to="https://github.com/shadafhossain01" target='_blank'> <FaSquareGithub style={{color:"#333333"}}/> </Link>
        <Link to="https://www.facebook.com/shadafhossain01/" target='_blank'>  <FaFacebookSquare style={{color:"#076BFF"}}/> </Link>
        <Link to="https://medium.com/@shadafhossain01" target='_blank'>  <IoLogoMedium style={{color:"#000"}}/> </Link>
      </div>
      <div className='right-about'>
      <h2><span>Swag Resturant</span> Github Repository </h2>
      <Link to="https://github.com/shadafhossain01/Swag-Resturant" target='_blank'>Repository Link</Link>
      </div>
      </div>
      </div>
    )
  }
}

export default About