import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../../Components/Shered/Navber/Navber'
import Footer from '../../Components/Shered/Footer/Footer'

const Root = () => {
    return (
        <>
            <Navber />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Root