import { useState } from "react";
import "../App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";

import Imgslider from "./Pages/Imgslider";
import Gallery from "./Pages/Gallery";
import Contactus from "./Pages/Contactus";
import Footer from "./components/Footer";
import Destination from "./Pages/Destination";
import TestimonialCarousel from "./Pages/Testimonialcarousel";
import VenueSection from "./Pages/VenueSection";

import Faq from "./Pages/Faq";
import ClientReviews from "./Pages/ClientReviews";

function Eventhomemain() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Destination />
      <Imgslider />
      <TestimonialCarousel /> 
      <VenueSection />
      <ClientReviews />
      <Gallery />
      <Contactus />
      <Faq />
      <Footer />
    </>
  );
}

export default Eventhomemain;