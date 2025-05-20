// import React from 'react'

// const Hero = () => {
//   return (
//         <>
//         <div className='-mt-30 top-0 bg-black '>
//         <img src="https://eventsmanagementkerala.com/wp-content/uploads/2023/08/kerala-haldi-stage-decoration-weddings.webp" alt="" className=' opacity-55 w-full h-[600px] lg:h-[900px] object-cover'/>
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
//             <h1 className='text-xl'>About</h1>
//             <h1 className="text-xl md:text-6xl font-bold uppercase mb-4">Crafting Unforgettable Moments</h1>
//             <p className="text-sm md:text-2xl max-w-2xl">
//                 From weddings to corporate galas, we turn your vision into reality with seamless execution and creative flair.
//             </p>
//             <div className="flex justify-center mt-10">
//             <button
//                 className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer "
            
//             >
//                 Contact us
//             </button>
//             </div>
//             </div>
//         </>
//     )
//     }

//     export default Hero

    import React, { useEffect, useState } from 'react'

    const images = [
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/07/insta.webp",
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/10/wedding-stage.webp",
    "https://eventsmanagementkerala.com/wp-content/uploads/2023/05/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees.webp",
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
        <div className=' top-0 bg-black overflow-hidden relative h-screen border border-red-600'>
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