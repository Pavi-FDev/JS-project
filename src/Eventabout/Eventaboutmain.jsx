import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

import Hero from './Components/Hero'
import Whoweare from './Pages/Whoweare'
import AboutBridely from './Pages/AboutBridely'
import ExploreServices from './Pages/ExploreServices'
import MeetTheTeam from './Pages/MeettheTeam'
import WeddingTipsSection from './Pages/WeddingTipsSection'
import Navbar from '../Eventhome/components/Navbar'
import Footer from '../Eventhome/components/Footer'


function Eventaboutmain() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Hero/>
  <Whoweare/>
  <AboutBridely/>
  <ExploreServices/>
  <MeetTheTeam/>
  <WeddingTipsSection/>
   <Footer/>

  
    </>
  )
}

export default Eventaboutmain;
