import React from 'react'
import Header from '../components/Header/index'
import Hero from '../components/Hero/index'
import Counts from '../components/Counts/index'
import Numbers from '../components/Numbers/index'
import Freatures from '../components/Freatures/index'
import Download from '../components/Download/index'
import Card from '../components/Card/index'
import imageCard1 from '../assets/card1.png'
import imageCard2 from '../assets/card2.png'
import imageCard3 from '../assets/card3.png'
import '../components/Card/style.css'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Counts />
      <Numbers />
      <Freatures />
      <Download />
      <div className='cards'>
        <Card
          title='Financial Freedom '
          imageUrl={imageCard1}
          body='Explore the path to financial independence, discover smart investment strategies, and learn 
        how to manage your money effectively. Our blog is your key to unlocking financial freedom.' />
        <Card
          title='Banking Innovation Hub'
          imageUrl={imageCard2}
          body='Stay updated on the latest banking technologies and innovations. 
          Discover how our bank is leveraging cutting-edge solutions to enhance your banking experience.' />
        <Card
          title='Retirement Planning Corner'
          imageUrl={imageCard3}
          body='Plan for your golden years with confidence. Our blog offers retirement planning tips, 
          investment strategies, and insights into pension options to ensure a secure retirement.' />
      </div>
      <Footer />

    </>

  )
}

export default Home