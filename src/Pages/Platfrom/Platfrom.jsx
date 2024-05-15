import React from 'react'
import Banner from '../../Components/PlatformPage/Banner/Banner'
import ConnectedCompany from '../../Components/Shered/ConnectedCompany/ConnectedCompany'
import About from '../../Components/PlatformPage/About/About'
import CreativeAgency from '../../Components/PlatformPage/CreativeAgency/CreativeAgency'
import CreatorBenifit from '../../Components/Shered/CreatorBenifit/CreatorBenifit'
import HireUs from '../../Components/Shered/HireUs/HireUs'
import Blogs from '../../Components/Shered/Blogs/Blogs'

const Platfrom = () => {
    return (
        <>
            <Banner />
            <ConnectedCompany/>
            <About/>
            <CreativeAgency/>
            <CreatorBenifit/>
            <HireUs/>
            <Blogs/>
        </>
    )
}

export default Platfrom