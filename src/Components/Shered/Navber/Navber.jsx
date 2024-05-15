import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navber = () => {
    const links = [
        { menu: 'Platform', link: '/platfrom' },
        { menu: 'About', link: '/about' },
        { menu: 'Services', link: '/service' },
        { menu: 'Explore', link: '/expolre' },
        { menu: 'For Creators', link: '/creator' },
    ]
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links.map(item => <li key={item?.menu}><NavLink className='hover:bg-[#ffff00]' to={item?.link}>{item?.menu}</NavLink></li>)
                        }
                    </ul>
                </div>
                <Link to={`/`} className="btn btn-ghost text-xl px-0 font-bold hover:bg-transparent">Logo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links.map(item => <li key={item?.menu}><NavLink className='hover:bg-[#ffff00]' to={item?.link}>{item?.menu}</NavLink></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='hover:bg-[#ffff00] mx-2 px-4 py-1 rounded' to={`/login`}>Login</Link>
                <button className="btn bg-[#ffff00] font-bold px-8 border-black rounded-3xl">Let’s Talk</button>
            </div>
        </div>
    )
}

export default Navber