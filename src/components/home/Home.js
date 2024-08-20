import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-child1">
        <h1>Looking for dream internship?</h1>
        <h1 className="h1-animation">Gives hands on experience|</h1>
        <p>
          Internee.pk kickstart student's tech careers with first internships,
          providing industry exposure, practical skills, and networking
          opportunities, paving the way for their success in the tech industry.
        </p>
        <div className="child1-image-container">
            <img src="/img/incubation.jpg" alt="logo" />
            <img src="/img/nic.png" alt="logo" />
        </div>
        <div className="child1-btn-container">
          <button  className="home-btn1">Job Portal</button>
          <button className="home-btn2">Our LMS</button>
        </div>
      </div>
      <div className="home-child2">
        <img src="/img/hero.webp" alt="hero" />
      </div>
    </div>
  );
}

export default Home;
