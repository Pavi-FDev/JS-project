import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const venues = [
  {
    name: "Hendry’s Event Centre In  Alappuzha",
    location: 'Alappuzha',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/ancheril-pavilion-kottayam-convention-halls-wvimu0ds70-r52gehwreunj769za5lk07cah36iw5p769moc78xbm.webp',
    rating: 4,
  },
  {
    name: 'Chaanthni Lake View Resort Alappuzha',
    location: 'Alappuzha',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/base-eleven-convention-r52j4ma8u8z35rr0bkhjafyiv3jwep8hbx9du1rfsi.webp',
    rating: 3,
  },
  {
    name: 'Camelot Convention Center Alappuzha',
    location: 'Alappuzha',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/rainforest-ayur-counntry-r52fz1gb0xhsa0q9jh2f03reszd8bcc3prf88e5zn6.webp',
    rating: 5,
  },
  {
    name: 'Palm Tree Convention Centre, Kochi',
    location: 'Kochi',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/zodiac-main-1-r52h2vu0q41ceyuqvp33p1stayzclgihuyy6kn37w2.webp',
    rating: 5,
  },
  {
    name: 'Riverdale Grand Resort',
    location: 'Wayanad',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/balakrishna-main-new-r2eyc3neaqb8lxolgpy8g8d0o3pjnvt1nonabauj02.webp',
    rating: 5,
  },
  {
    name: 'Sunrise Lake Hall',
    location: 'Kumarakom',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/arabian-beach-resort-kannur-r0yar82whtp2apd4985dmkvhzub0iw97epbrh89y9e.webp',
    rating: 4,
  },
  {
    name: 'Arabian Beach Resort Kannur',
    location: 'Kannur',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/kanaka-beach-house-r0vfb0p8bpjga4z9zx230vbjlkfs34f4dllwqs6x82.jpg',
    rating: 3,
  },
   {
    name: 'Dass Continental in Sakthan Nagar, Thrissur',
    location: 'Thrissur',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/das-1-r3pie7944gmept85c72rs4f94kw74hvqpjvibay1f6.webp',
    rating: 4,
  },
 {
    name: 'Balakrishna Residency Guruvayur',
    location: 'West Nada, Guruvayur, ThrissurThrissur',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/balakrishna-main-new-r2eyc3neaqb8lxolgpy8g8d0o3pjnvt1nonabauj02.webp',
    rating: 5,
  },
];

const VenueSection = () => {
  const INITIAL_COUNT = 3;
  const LOAD_COUNT = 3;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleToggle = () => {
    if (visibleCount >= venues.length) {
      setVisibleCount(INITIAL_COUNT); // collapse to initial
    } else {
      setVisibleCount((prev) => Math.min(prev + LOAD_COUNT, venues.length)); // load more
    }
  };

  const visibleVenues = venues.slice(0, visibleCount);
  const showLess = visibleCount >= venues.length;

  return (
    <section className="bg-white text-gray-900 py-16 px-10 md:px-12 lg:px-40  mt-10  ">
      {/* Top Content */}
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-10  ">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Venues : A Fairytale Setting for Events
          </h2>
          <p className="mb-4 font-semibold  ">
            <strong>JS Event Management</strong> introduces Kerala’s venues, offering lush greenery, breathtaking beauty, and world-class amenities.
          </p>
          <p className="text-sm text-gray-700">
            Find the best event and wedding venues in Kerala with Melodia Event Management. We offer expert event management services for all occasions.
          </p>
        </div>
        <motion.img
          src="https://eventsmanagementkerala.com/wp-content/uploads/2023/07/outdoor-wedding-venues-in-Kerala-1024x575.jpg"
          alt="Wedding Venue"
          className=" shadow-xl "
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Filters */}
      {/* <motion.div
        className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center  "
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold  ">
          Filter Venue List
        </button>
        <select className="px-4 py-2 border rounded-full w-60">
          <option>Select Venue Location</option>
        </select>
        <select className="px-4 py-2 border rounded-full md;w-60">
          <option>Select Venue Type</option>
        </select>
        <input
          type="text"
          placeholder="Search Venue/Location..."
          className="px-4 py-2 border rounded-full w-72"
        />
      </motion.div> */}

      {/* Venue Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 lg:mt-30   "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {visibleVenues.map((venue, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300  "
            whileHover={{ scale: 1 }}
          >
            <img src={venue.image} alt={venue.name} className=" h-48 object-cover w-full " />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex text-yellow-500">
                  {Array(venue.rating).fill().map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1 ">{venue.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <FaMapMarkerAlt className="mr-1" />
                {venue.location}
              </div>
              <div className="flex gap-2 flex-wrap">
                <button className="bg-gradient-to-r from-gray-900 to-yellow-500 hover:from-yellow-600 text-white text-sm px-3 py-1 rounded-full cursor-pointer ">
                  ContactUs
                </button>
               
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-10">
        <motion.button
          onClick={handleToggle}
          className="px-3 py-1 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-color mt-15"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          {showLess ? 'Show Less' : 'Load More'}
        </motion.button>
      </div>
    </section>
  );
};

export default VenueSection;
