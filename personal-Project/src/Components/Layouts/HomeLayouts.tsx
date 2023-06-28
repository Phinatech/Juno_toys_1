// import React from 'react'
import { Outlet } from "react-router-dom"
import Headers from "../Blocks/Headers"
import Footer from "../Blocks/Footer"

const HomeLayouts = () => {
  return (
    <div>
        <Headers/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayouts