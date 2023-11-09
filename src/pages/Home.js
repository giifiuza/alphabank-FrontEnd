import React from 'react'
import Header from '../components/Header/index'
import Hero from '../components/Hero/index'
import Counts from '../components/Counts/index'
import Numbers from '../components/Numbers/index'
import Freatures from '../components/Freatures/index'
import Phone from '../components/Phone'

function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Counts/>
        <Numbers/>
        <Freatures/>
        <Phone />
    </>
    
  )
}

export default Home