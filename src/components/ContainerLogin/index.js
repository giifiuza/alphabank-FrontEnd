import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './style.css'
import { useAuthStore } from '../../stores/authStores/index'
import axios from 'axios'

function ContainerLogin() {

  const navigate = useNavigate();

  //Constantes que armazenam os tokens
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const setRefreshToken = useAuthStore(state => state.setRefreshToken);

  //Constante para armazenamento do cpf e passaword para assim passar para a api
  const cpf = useState('');
  const password = useState('');

  //Função que faz login
  async function teste(e) {
    e.preventDefault();
    console.log(e)
    await axios.post('http://localhost:8000/api/token/', {
      "cpf": e.target.cpf.value,
      "password": e.target.password.value
    })
      .then((response) => {
        const accessToken = response.data.access;
        const refreshToken = response.data.refresh;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
      })
      .then(() => {
        navigate('/account', { replace: true })
      })
      .catch((e) => {
        console.log(cpf, password)
        console.log(e);
      })
  }

  return (
    <form className='containerLogin' onSubmit={teste}>

      <section className="conteudo">

        <div className="inputs">
          <h1 className='titleLogin'>Welcome!</h1>
          <h2 className='subtitleLogin'>CPF</h2>
          <input type="number" name='cpf' placeholder="123.456.789.00" />
          <h2 className='subtitleLogin'>Password</h2>
          <input type="password" name='password' placeholder="********" />
          <button className='password'>Forget password?</button>
          <div className='btnLogin'>
            <button className='login' type="submit" >
              <p>Login</p>
            </button>
            <button onClick= {() => navigate('/register')} className='register' type="submit">
              <p>Register</p>
            </button>
          </div>

        </div>
      </section>
    </form>
  );
};

export default ContainerLogin