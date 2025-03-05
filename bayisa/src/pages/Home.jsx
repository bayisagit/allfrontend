import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/about">Go to About Us</Link> <br />
      <Link to="/contact">Go to Contact Us</Link>
    </div>
  );
};

export default Home;
