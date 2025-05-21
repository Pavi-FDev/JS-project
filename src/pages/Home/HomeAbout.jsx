import React from 'react'

import { RiAddCircleFill } from "react-icons/ri";

const HomeAbout = () => {
  return (
    <>
   <div className="bg-[#FAF9F6] mt-40 overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center overflow-hidden ">
    
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-5xl font-light text-gray-500 mb-6 leading-tight px-8">
        Stories by Js Event Management
      </h2>
      <p className="text-gray-700 text-lg mb-8 px-8 md">
       Melodia Event Management offers a diverse range of blogs that cover topics related to event management and planning From destination wedding planning to corporate events, each blog provides valuable insights to help you plan your next event seamlessly.
      </p>
      {/* <button className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">
        MORE
      </button> */}
    </div>

    {/* Right Image */}
    {/* <div className='px-30'>
      <img
        src="https://www.planetariumevents.gr/portal-img/block_f_v/1/planetarium-wedding-venue-thessaloniki-2.jpg"
        alt="Event table setting"
        className="w-[400px] h-auto object-cover rounded-md "
      />
    </div> */}
   
  <iframe  src="https://www.youtube.com/embed/hTor-Ed8e50" title="Malayali Vietnamese Destination Wedding in Thrissur, Venue - KR Thekkedathu Mana | #1 Kerala Wedding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='px-2 md:px-0 items-center lg:w-[578px] lg:h-[326px]'></iframe>

  </div>
</div>
   
    </>
   
   
  )
}

export default HomeAbout