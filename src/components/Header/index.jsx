import React from 'react'
import Logo from '../../assets/logo.png'
import './style.css'
import { FaSignOutAlt } from "react-icons/fa";


function Header() {
    return (
        <div className='container'>
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className='topics'>
                <a href='#'>Freature</a>
                <a href='#'>Pricing</a>
                <a href='#'>About us</a>
                <a href='#'>FAQ</a>
            </div>
            <button onClick={alert}>
                <FaSignOutAlt color='#C5BFBF'/>
                Login
            </button>
                
        </div>
    )
}

export default Header
