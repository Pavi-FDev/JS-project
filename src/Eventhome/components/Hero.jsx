import React, { useEffect, useState } from 'react'

    const images = [
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/02/blog-2.27e5a04.webp",
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/08/oppana-Malappuram.webp",
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/07/outdoor-wedding-venues-in-Kerala.jpg",
    ]

    const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
        }, 9000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
        
        <div className=' top-0 bg-black overflow-hidden relative h-screen '>
            <img
            src={images[currentImage]}
            alt=""
            className='zoom-slide opacity-55 w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000'
            />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 animate-rise-up mt-50">
            <h1 className="text-xl md:text-6xl font-bold uppercase mb-4">
            Crafting Unforgettable Moments
            </h1>
            <p className="text-sm md:text-2xl max-w-2xl">
            From weddings to corporate galas, we turn your vision into reality with seamless execution and creative flair.
            </p>
            <div className="flex justify-center mt-10">
            <button className="bg-gradient-to-r from-gray-900 to-yellow-500 text-white px-2 py-1 rounded-full hover:from-yellow-600 transition cursor-pointer ">
                Contact us
            </button>
            </div>
        </div>

        <style jsx>{`
            .zoom-slide {
            animation: zoomSlide 15s ease-in-out infinite;
            }

            @keyframes zoomSlide {
            0%, 100% {
                transform: scale(1) translateX(0);
            }
            50% {
                transform: scale(1.1) translateX(-20px);
            }
            }

            .animate-rise-up {
            animation: riseUp 1s ease-out forwards;
            opacity: 0;
            }

            @keyframes riseUp {
            0% {
                transform: translateY(40px);
                opacity: 0;
            }
            100% {
                transform: translateY(0px);
                opacity: 1;
            }
            }
        `}</style>
        </>
    )
    }

    export default Hero

