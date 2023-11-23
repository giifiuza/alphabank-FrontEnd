import React from 'react'
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom"
import './style.css'

function ContainerLogin() {

  const navigate = useNavigate();

  return (
    <div className='containerLogin'>
      <img src={logo} alt="Logo" className="logo" />
      <section className="conteudo">

        <div className="inputs">
          <h1 className='titleLogin'>Welcome!</h1>
          <h2 className='subtitleLogin'>CPF</h2>
          <input type="number" placeholder="123.456.789.00" />
          <h2 className='subtitleLogin'>Password</h2>
          <input type="password" placeholder="********" />
          <button className='password'>Forget password?</button>
          <div className='btnLogin'>
            <button className='login'  onClick={()=> navigate('/')}>
              <p>Login</p>
            </button>
            <button className='register' onClick={()=> navigate('/register')}>
              <p>Register</p>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContainerLogin