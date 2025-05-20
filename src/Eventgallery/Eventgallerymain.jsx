import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

import EventGallery from './Pages/EventGallery'
import Hero from './assets/Components/Hero'
import Navbar from '../Eventhome/components/Navbar'
import Footer from '../Eventhome/components/Footer'


function Eventgallerymain() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar />
<Hero/>
<EventGallery/>
<Footer/>
    </>
  )
}

export default Eventgallerymain;
