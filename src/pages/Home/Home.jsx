import React from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeClientreviews from "./HomeClientreviews";

import HomeContactus from "./HomeContactus";
import HomeDestination from "./HomeDestination";
import HomeFaqs from "./HomeFaqs";
import HomeImgslider from "./HomeImgslider";
import HomeServices from "./HomeServices";
import HomeTestimonialcarousel from "./HomeTestimonialcarousel";
import HomeVenuesection from "./HomeVenuesection";
import HomeGallery from "./HomeGallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeDestination />
      <HomeImgslider />
      <HomeTestimonialcarousel />
      <HomeVenuesection />
        
      <HomeClientreviews />
      <HomeGallery />
      <HomeContactus />
      <HomeFaqs />
      
    </div>
  );
};

export default Home;
