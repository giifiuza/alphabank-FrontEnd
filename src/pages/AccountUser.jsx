import React from 'react'
import '../components/Styles/accountuser.css';
import Header from '../components/Header';
import ImageAccount from '../assets/accountuser.svg';

function AccountUser() {
    return (
        <>
            <Header />
            <div className='containerAccount'>
                <div className="informations">
                    <h1>Hello Fulano!</h1>
                    <div className="details">
                        <h2>Your agency <span>0001</span></h2>
                        <h2>Account number <span>123456-8</span></h2>
                    </div>
                    <h2>Your balance is <span className='saldo'> R$10.000,00</span></h2>

                    <button type="submit">Solicitar cartão de crédito</button>
                </div>
                <div className="mais-inform">
                    <h3>For more information download the app</h3>
                    <img src={ImageAccount} alt='Logo' />
                </div>




            </div>
        </>

    )
}

export default AccountUser