import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { api } from '../../services/api'
import '../ImageRegis/style.css'
import { toast } from 'react-toastify';
import Modal from 'react-modal';


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
      "url_imagem": null
    })
      .then(() => {
        alert('Criou')
      })
      .catch(() => {
        alert('Foi não')
      })
  }

  const [imagem, setImagem] = useState('');
  const [imagemPreview, setImagemPreview] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImagemChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImagem(file);
      setImagemPreview(URL.createObjectURL(file));
      openModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <div className='nomes'>
          <div className='name'>
            <h2>Birth Date</h2>
            <input type='date' name='dataNasc' placeholder='00/00/0000' required />
          </div>
          <div className='name'>
            <h2>Phone number</h2>
            <input type='tel' name='telefone' placeholder='(xx)00000-0000' required />
          </div>
        </div>
        <h2>Password</h2>
        <input type='password' name='password' placeholder='********' required />
        <h2>Profile Image</h2>
        <input type="file" accept="image/png,jpg,jpeg" onChange={handleImagemChange} />
        <div className='buttons'>
          <button className='btnRegis' type="submit" >Register</button>
          <button className='btnSign' onClick={() => navigate('/login')}>Sign In</button>
        </div>

      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview Modal"
        style={{
          content: {
            borderRadius: 20,
            width: '25%', // Ajuste a largura conforme necessário
            height: '40%', // Ajuste a altura conforme necessário
            margin: 'auto', // Para centralizar o modal
          }
        }}
      >
        <h2 style={{ margin: 'auto' }}>Your image</h2>
        {imagemPreview ? (
          <img
            src={imagemPreview}
            alt="Imagem do usuário"
            style={{
              borderRadius: '50%',
              margin: 'auto',
              width: '58%', // Ajuste o tamanho da imagem conforme necessário
              height: '70%', // Ajuste o tamanho da imagem conforme necessário
              display: 'block', // Impede qualquer margem extra
            }}
          />
        ) : (
          <span>No image selected</span>
        )}
        <button
          style={{
            width: '14%',
            margin: 'auto',
            marginTop:'10px',
            display: 'block', // Impede qualquer margem extra
          }}
          onClick={closeModal}
        >
          OK
        </button>
      </Modal>


    </form>
  )
}

export default ContainerInputs;
