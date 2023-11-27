import './style.css'
import React from 'react'
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom"


function Hero() {

    const navigate = useNavigate();


    return (
        <>
            <div className='all'>
                <div className="phase">
                    <h1>Control your financial future easily</h1>
                </div>
                <Spline scene="https://prod.spline.design/fLveBFvZAr7QAkCS/scene.splinecode" style={{ width: '60%', height: 600}} /> 
                
            </div>
            <button className='btn' onClick={()=> navigate('/register')}>
                Order yours
            </button>
                

        </>
        
    )
}

export default Hero