import React from 'react'
import './style.css'
import foto from '../../assets/telefone.png'
import blob from '../../assets/pipi (1).png'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'

function Download() {
    return (
        <div>
            <div className='containerMobile'>
                <img className='mobile' src={foto} alt="Mobile" />
                <img className='circulo' src={blob} alt="Circle" />
                <h1 className='titulo'>Join together with others to use Alpha Bank</h1>
                <img className='play' src={playstore} alt='Logo PlayStore' />
                <img className='app' src={appstore} alt='Logo AppStore' />
                <p>Experience seamless banking at your fingertips! 
                Download our user-friendly app now for secure transactions, easy account management, 
                and exclusive benefits. Empower your financial journey with convenience and innovation. Join Alpha Bank today!</p>
            </div>
           
        </div>



    )
}

export default Download
