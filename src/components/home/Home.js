import React from "react";
import Typical from "react-typical";
import "./Home.css";
import img1 from "../../assest/incubation.jpg";
import img2 from "../../assest/nic.png";
import img3 from "../../assest/hero.webp";

function Home() {
  return (
    <div className="home-container">
      <div className="home-child1">
        <h1>Looking for dream internship?</h1>
        <h1 className="h1-animation">
          <Typical
            steps={[
              "On your desire domain",
              3000,
              "Gives hands on experience!",
              2000,
              "Get a competative job",
              1000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </h1>
        <p>
          Internee.pk kickstart student's tech careers with first internships,
          providing industry exposure, practical skills, and networking
          opportunities, paving the way for their success in the tech industry.
        </p>
        <div className="child1-image-container">
          <img src={img1} alt="logo" />
          <img src={img2} alt="logo" />
        </div>
        <div className="child1-btn-container">
          <button className="home-btn1">Job Portal</button>
          <button className="home-btn2">Our LMS</button>
        </div>
      </div>
      <div className="home-child2">
        <img src={img3} alt="hero" />
      </div>
    </div>
  );
}

export default Home;
