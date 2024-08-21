import React from "react";
import "./Whypk.css";
import img1 from "../../assest/programing.jpg";
import img2 from "../../assest/icons.svg";

const Whypk = () => {
  const items = [
    "5500+ Students already registered",
    "Task based projects that based on hands-on experience",
    "Massive Courses with high-quality videos on LMS",
    "Empowering youth towards IT revolution & technology",
    "Hands on Experience via Virtual internship",
    "Complete your task and get market competent job",
    "Direct Collaboration with companies for direct hiring",
  ];

  return (
    <div className="whypk">
      <h1>Why internee.PK</h1>
      <div className="whypk-container">
        <div className="whypk-child1">
          {items.map((item, index) => (
            <div className="whypk-card" key={index}>
              <div className="img">
                <img src={img2} alt="icon" />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="whypk-child2">
          <img src={img1} alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default Whypk;
