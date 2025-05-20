import { useState } from "react";
import "./App.css";

import Eventhomemain from "./Eventhome/Eventhomemain";
import Eventaboutmain from "./Eventabout/Eventaboutmain";
import Eventgallerymain from "./Eventgallery/Eventgallerymain";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Eventhome/components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<Eventhomemain />} />
            <Route path="/about" element={<Eventaboutmain />} />
            <Route path="/gallery" element={<Eventgallerymain />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
