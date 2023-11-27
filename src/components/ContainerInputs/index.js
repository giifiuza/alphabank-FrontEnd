import React from 'react'
import { useNavigate } from "react-router-dom"
import { api } from '../../services/api'
import '../ImageRegis/style.css'
import { toast } from 'react-toastify';


function ContainerInputs() {

  const navigate = useNavigate();

  async function register(e) {
    await api.post('api/v1/user/create/', {
      "email": e.target.email.value,
      "password": e.target.password.value,
      "dataNasc": e.target.dataNasc.value,
      "first_name": e.target.first_name.value,
      "telefone": e.target.telefone.value,
      "last_name": e.target.last_name.value,
      "cpf": e.target.cpf.value,
      "url": null
    })
    .then((response) => {
        toast.success('User Created ', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })
    .catch((response) => {
      toast.error('Invalid Information ', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    register(e);
    console.log("aparentemente foi")
}
  return (
    <form className='allInputs' onSubmit={handleRegister}>
      <h1>Register now!</h1>
      <div className='middle'>
        <div className='nomes'>
          <div className='name'>
            <h2>First name</h2>
            <input type='text' name='first_name' placeholder='First name' required />
          </div>
          <div className='name'>
            <h2>Last name</h2>
            <input type='text' name='last_name' placeholder='Last name' required />
          </div>
        </div>

        <h2>CPF</h2>
        <input type='text' name='cpf' placeholder='123.456.789-00' required />
        <h2>Email</h2>
        <input type='email' name='email' placeholder='youremail@mail.com' required />
        <h2>Birth Date</h2>
        <input type='date' name='dataNasc' placeholder='00/00/0000' required />
        <h2>Phone number</h2>
        <input type='tel' name='telefone' placeholder='(xx)00000-0000' required />
        <h2>Password</h2>
        <input type='password' name='password' placeholder='********' required />
        <div className='buttons'>
          <button className='btnRegis' type="submit" >Register</button>
          <button className='btnSign' onClick={() => navigate('/login')}>Sign In</button>
        </div>

      </div>


    </form>
  )
}

export default ContainerInputs