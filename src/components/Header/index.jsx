import React from 'react'
import Logo from '../../assets/logo.png'
import './style.css'
import { useNavigate } from "react-router-dom"
import { FaSignInAlt } from "react-icons/fa";
import Button from '../Button/index'


function Header() {

    const navigate = useNavigate();

    return (
        <div className='containerHome'>
            <div className="logoHome">
                <img src={Logo} alt='Logo' onClick={()=> navigate('/')}/>
            </div>
            <div className='topics'>
                <a href='/'><p>Freature</p></a>
                <a href='/'><p>Pricing</p></a>
                <a href='/'><p>About us</p></a>
                <a href='/'><p>FAQ</p></a>
            </div>
            <Button title={'Login'}>
                <FaSignInAlt size={24} color='#C5BFBF'/>
            </Button>
                
        </div>
    )
}

export default Header
