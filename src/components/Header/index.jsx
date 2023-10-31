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
                <a href='#'><p>Freature</p></a>
                <a href='#'><p>Pricing</p></a>
                <a href='#'><p>About us</p></a>
                <a href='#'><p>FAQ</p></a>
            </div>
            <button onClick={alert}>
                <FaSignOutAlt color='#C5BFBF'/>
                Login
            </button>
                
        </div>
    )
}

export default Header
