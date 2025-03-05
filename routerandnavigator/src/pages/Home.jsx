import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <button onClick={()=> Navigate("/about")}>Go to About</button>
    </div>
  );
};

export default Home;
