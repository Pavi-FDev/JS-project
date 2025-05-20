import React from "react";
function App() {
  return (
    <div className="relative flex items-center justify-center  bg-black/70 ">
      {/* Fixed Background with Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed animate-zoom z-[-1]"
        style={{
          backgroundImage:
            "url('https://eventsmanagementkerala.com/wp-content/uploads/2023/05/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees.webp')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center lg:text-left text-white">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4 leading-snug">
            LOOKING FOR THE MOST <br />
            CREATIVE & INNOVATIVE EVENT <br />
            PLANNERS IN Tamilnadu?
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-sm">
            Imagine celebrating the most special events of your life without worrying
            about a single thing. JS Events is here to make your dream events
            come true! Our expert event management team offers professional event
            planning and management services in cities, villages, and small towns
            across Kerala, from south to north, using creative and innovative methods
            to plan and curate perfect, hassle-free celebrations that will captivate
            your attendees. Contact us today to bring your vision to life and create
            unforgettable memories!
          </p>
        </div>

        {/* Right Contact Form */}
        <form className="bg-white bg-opacity-10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg space-y-4 " >
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="w-full px-4 py-2 rounded bg-white text-black text-sm sm:text-base focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="w-full px-4 py-2 rounded bg-white text-black text-sm sm:text-base focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter your Email ID"
            className="w-full px-4 py-2 rounded bg-white text-black text-sm sm:text-base focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 rounded bg-white text-black text-sm sm:text-base focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-purple-800 text-white px-6 py-2 rounded text-sm sm:text-base"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>


  );
}

export default App;
