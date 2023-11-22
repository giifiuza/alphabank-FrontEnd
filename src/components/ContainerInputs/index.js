import React from 'react'
import { useNavigate } from "react-router-dom"


function ContainerInputs() {

  const navigate = useNavigate();

  return (
    <div className='allInputs'>
      <h1>Register now!</h1>
      <div className='middle'>
        <h2>Full name</h2>
        <input type='text' placeholder='Full Name' required />
        <h2>CPF</h2>
        <input type='text' placeholder='123.456.789-00' required />
        <h2>Email</h2>
        <input type='email' placeholder='youremail@mail.com' required/>
        <h2>Birth Date</h2>
        <input type='date' placeholder='00/00/0000' required />
        <h2>Phone number</h2>
        <input type='tel' placeholder='(xx)0000000-0000' required />
        <div className='buttons'>
          <button className='btnRegis' onClick={()=> navigate('/')}>Register</button>
          <button className='btnSign'  onClick={()=> navigate('/login')}>Sign In</button>
        </div>

      </div>


    </div>
  )
}

export default ContainerInputs