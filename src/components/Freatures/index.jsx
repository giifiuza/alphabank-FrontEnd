import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom"

function Freature() {

  const navigate = useNavigate();

  return (
    <div className='containerFreatures'>
      <div className='sub-container'>
        <h1 className='title'>Features</h1>
        <div className='middleFreatures'>
          <div className='text-freatures'>
            <h1>Best features provided by Alpha Bank</h1>
            <p>Alpha Bank stands out with its technological innovation, providing personalized service, a wide range of financial products,
              and a commitment to the community. With a focus on security and ethics, it's a reliable and modern choice for individuals and businesses.</p>
            <div className='btns'>
              <button className='btn-get' onClick={()=> navigate('/register')}>Get started</button>
              <button className='btn-learn'>Learn more</button>
            </div>
          </div>
          <div className='freatures-options'>
            <div className='item'>
              <div>
                <h1>Technological Innovation</h1>
                <p>Empowering your finances through cutting-edge technology. Experience banking innovation at its best. </p>
              </div>
            </div>
            <div className='item'>
              <div>
                <h1>Transparency</h1>
                <p> We disclose every step to strengthen your relationship with money. Your bank, your clear vision of the future.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Freature