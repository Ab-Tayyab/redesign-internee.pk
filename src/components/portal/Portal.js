import React from "react";
import "./Portal.css";
import '../animations/Animations.css'
import img1 from "../../assest/portal.webp";
import img2 from "../../assest/presentation.svg";
import img3 from "../../assest/account.svg";
import img4 from "../../assest/desktop.svg";
import img5 from "../../assest/playlist.svg";

function Portal() {
  return (
    <div className="portal-container ">
      <div className="portal-child1">
        <img src={img1} alt="portal" className="img-animation"/>
      </div>
      <div className="portal-child2">
        <h2>Our own task portal</h2>
        <h1>Manage Project Via Own Task Portal</h1>
        <p>
          Welcome to internee.pk task portal. Where Tasks Transform Into Skills
        </p>
        <div className="portal-specs1">
          <div>
            <img src={img2} alt="portal"/>
            <p>
              <span>Hands on Projects </span> we believe in learning by doing.
              Dive into hands-on projects that simulate real-world scenarios.
              From coding challenges to creative projects, every task is crafted
              to impart practical skills that resonate in professional
              environments.
            </p>
          </div>
          <div>
            <img src={img3} alt="portal"/>
            <p>
              <span>How to represent yourself</span> More than just completing
              tasks, It empowers you to showcase your journey. Every completed
              task contributes to your digital portfolio, a dynamic
              representation of your skills and accomplishments. Let your work
              speak volumes about your capabilities.
            </p>
          </div>
        </div>
        <div className="portal-specs2">
          <div>
            <img src={img4} alt="portal"/>
            <p>
              <span>SDLC Techniques</span> Understanding the Software
              Development Life Cycle (SDLC) is pivotal in the tech world.
              Acquire skills that align with industry standards and boost your
              project management proficiency. environments.
            </p>
          </div>
          <div>
            <img src={img5} alt="portal"/>
            <p>
              <span>Easy to understand Learning</span> shouldn't be complicated.
              Our tasks are designed to be easily comprehensible, ensuring a
              smooth learning experience for everyone. Whether you're a seasoned
              professional or a beginner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
