import React from 'react'
import Banner from '../../Components/HomePage/Banner/Banner'
import { FaPinterest } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import OurService from '../../Components/HomePage/OurService/OurService';
import CreativeTeam from '../../Components/HomePage/CreativeTeam/CreativeTeam';
import WhyChoose from '../../Components/HomePage/WhyChoose/WhyChoose';
import HowWeDo from '../../Components/HomePage/HowWeDo/HowWeDo';
import { Link } from 'react-router-dom';
import Statisties from '../../Components/HomePage/Statisties/Statisties';
import Creator from '../../Components/HomePage/Creator/Creator';
import Reviews from '../../Components/HomePage/Reviews/Reviews';
import CreatorBenifit from '../../Components/Shered/CreatorBenifit/CreatorBenifit';
import OtherCompany from '../../Components/HomePage/OtherCompany/OtherCompany';
import HireUs from '../../Components/Shered/HireUs/HireUs';
import Blogs from '../../Components/Shered/Blogs/Blogs';
import ConnectedCompany from '../../Components/Shered/ConnectedCompany/ConnectedCompany';
const Home = () => {
    return (
        <div>
            <Banner />
            <div className='  flex justify-start items-center text-3xl w-fit gap-3 text-[#C6C6C6] rotate-90 fixed z-50 -right-20 top-[50%] translate-y-[-50%]'>
                <p className='text-xl font-medium text-black'>FOLLOW</p>
                <Link to={`#`}>
                    <FaPinterest />
                </Link>
                <Link to={`#`}>
                    <IoBasketballOutline />
                </Link>
                <Link to={`#`}>
                    <FaTwitter />
                </Link>
                <Link to={`#`}>
                    <FaFacebook />
                </Link>
            </div>
            <OurService />
            <ConnectedCompany />
            <CreativeTeam />
            <WhyChoose />
            <HowWeDo />
            <Statisties/>
            <Creator/>
            <Reviews/>
            <CreatorBenifit/>
            <OtherCompany/>
            <HireUs/>
            <Blogs/>
        </div>
    )
}

export default Home