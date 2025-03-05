import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Aboutus";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";  {/* Corrected import here */}
import Navbar from "./pages/navba";
import UserProfile from "./pages/userprofile";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<UserProfile/>} />
          <Route path="*" element={<NotFound />} />  {/* Handles undefined routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
