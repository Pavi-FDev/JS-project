


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./Components/Footer";
import Blogmain from "./pages/Blog/Blogmain";
import Contactus from "./pages/Contactus/Contactus";
import Servicessmain from "./pages/Servicess/Servicessmain";




function App() {


  return (
    <>
      <Router>
        <div>
           <Navbar/>
          <Routes>
       
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blogmain />} /> 
            <Route path="/contactus" element={<Contactus />} /> 
            <Route path="/services" element={<Servicessmain />} /> 
       
          </Routes>
            <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
