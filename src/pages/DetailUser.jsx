import React, { useState } from 'react';
import Header from '../components/Header';
import '../components/Styles/details.css';


function DetailUser() {
    const [imagem, setImagem] = useState('');
    const [imagemPreview, setImagemPreview] = useState('');

    const handleImagemChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImagem(file);
            setImagemPreview(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <Header />
            <div className='containerDetails'>

                <div className="inputsDados">
                    <h1>Edit User</h1>
                    <div className='input_nomes'>
                        <div className='nameInput'>
                            <h2>First name</h2>
                            <input type='text' name='first_name' placeholder='First name' required />
                        </div>
                        <div className='nameInput'>
                            <h2>Last name</h2>
                            <input type='text' name='last_name' placeholder='Last name' required />
                        </div>
                    </div>
                    <h2>Email:</h2>
                    <input type="email" placeholder='youremail@mail.com' />
                    <h2>Phone number:</h2>
                    <input type="tel" placeholder='(00)00000-0000' />
                    <h2>Birth date:</h2>
                    <input type="date" />
                    <button type="submit">Save Changes</button>
                </div>
                <div className="imageUpload">

                    <div className="circle">
                        {imagemPreview ? (
                            <img src={imagemPreview} alt="Imagem do usuário" />
                        ) : (
                            <span>Selecione uma Imagem</span>
                        )}

                    </div>
                    <input type="file" accept="image/png,jpg,jpeg" onChange={handleImagemChange} />
                </div>



            </div >
        </>

    );
};


export default DetailUser
