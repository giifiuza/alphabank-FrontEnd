import React from 'react'
import Logo from '../../assets/logo.png'
import './style.css'
import { useNavigate } from "react-router-dom"
import { FaSignOutAlt } from "react-icons/fa";


function Header() {

    const navigate = useNavigate();

    return (
        <div className='containerHome'>
            <div className="logoHome">
                <img src={Logo} alt='Logo' onClick={()=> navigate('/')}/>
            </div>
            <div className='topics'>
                <a href='#'><p>Freature</p></a>
                <a href='#'><p>Pricing</p></a>
                <a href='#'><p>About us</p></a>
                <a href='#'><p>FAQ</p></a>
            </div>
            <button onClick={()=> navigate('/login')}>
                <FaSignOutAlt color='#C5BFBF'/>
                Login
            </button>
                
        </div>
    )
}

export default Header
