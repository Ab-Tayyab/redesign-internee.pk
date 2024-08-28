import React from "react";
import "../portal/Portal.css";
import "./LMS.css";
import "../animations/Animations.css";
import img1 from "../../assest/lms.png";
import img2 from "../../assest/check.svg";
import img3 from "../../assest/plus.svg";
import img4 from "../../assest/info.svg";
import img5 from "../../assest/folder.svg";

function LMS() {
  return (
    // use same css file which is used in portal
    <div className="lms-container">
      <div className="portal-child2">
        <h2>Our LMS</h2>
        <h1>Guided Tutorials in Learning Management System</h1>
        <p>
          Want to learn something but don't know what's the roadmap or your
          english is not too good? That's why we launch LMS for you.
        </p>
        <div className="portal-specs1">
          <div>
            <img src={img2} alt="portal" />
            <p>
              <span>Sell Courses and Earn </span> Are you an expert in your
              field? Share your knowledge on our LMS. Create and sell courses,
              or contribute as an instructor. Empower others on their learning
              journey while earning rewards for your expertise.
            </p>
          </div>
          <div>
            <img src={img3} alt="portal" />
            <p>
              <span>Certification Complete</span> courses on our LMS and earn
              certifications that validate your expertise. Showcase your
              accomplishments to potential employers and stand out in a
              competitive landscape.
            </p>
          </div>
        </div>
        <div className="portal-specs2">
          <div>
            <img src={img4} alt="portal" />
            <p>
              <span>Courses in Urdu</span> Dive into the world of knowledge with
              our courses in Urdu. Breaking language barriers, Our LMS ensures
              that education is accessible and relatable for everyone. Learn,
              grow, and excel in a language that feels like home.
            </p>
          </div>
          <div>
            <img src={img5} alt="portal" />
            <p>
              <span>Practice Exercises Theory </span> is just the beginning. Our
              LMS goes beyond by offering practical exercises that challenge and
              refine your skills. Apply your knowledge in real-world scenarios,
              solidifying your understanding and boosting your confidence
            </p>
          </div>
        </div>
      </div>
      <div className="portal-child1">
        <img src={img1} className="lms-img img-animation" alt="LMS" />
      </div>
    </div>
  );
}

export default LMS;
