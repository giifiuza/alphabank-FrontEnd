import React from 'react'
import Header from '../components/Header/index'
import Hero from '../components/Hero/index'
import Counts from '../components/Counts/index'
import Numbers from '../components/Numbers/index'
import Freatures from '../components/Freatures/index'
import Download from '../components/Download'
import Cards from '../components/Cards'

function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Counts/>
        <Numbers/>
        <Freatures/>
        <Download />
        <Cards />
    </>
    
  )
}

export default Home