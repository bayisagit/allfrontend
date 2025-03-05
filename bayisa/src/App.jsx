import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutus";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";  {/* Corrected import here */}

function App() {
  return (
    <Router>
      <div className="bg-amber-50">
        <h1>Simple React App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />  {/* Handles undefined routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
