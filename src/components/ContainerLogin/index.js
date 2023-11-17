import React from 'react'
import logo from '../../assets/logo.png'
import './style.css'

function ContainerLogin() {

  return (
    <div className='container'>
      <img src={logo} alt="Logo" className="logo" />
      <section className="conteudo">

        <div className="inputs">
          <h1>Welcome!</h1>
          <h2>CPF</h2>
          <input type="cpf" placeholder="123.456.789.00" />
          <h2>Password</h2>
          <input type="text" placeholder="********" />
          <button className='password'>Forget password?</button>
          <button className='login'>
            <p>Login</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContainerLogin