import React from 'react'
import './style.css'
import foto from '../../assets/telefone.png'
import blob from '../../assets/pipi (1).png'

function Download() {
    return (
        <div>
            <div className='containerMobile'>
                <img className='mobile' src={foto} alt="Mobile" />
                <img className='circulo' src={blob} alt="Circle" />
                <h1 className='titulo'>Join together with others to use Alpha Bank</h1>
                {/* <p>Join million of others to use to use the world’s best finance platform</p> */}
            </div>
           
        </div>



    )
}

export default Download
