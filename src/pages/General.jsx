import React from 'react'
import Navbar from "../component/Navbar"
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

const General = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default General