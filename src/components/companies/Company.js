import React from "react";
import Contact from "../contact/Contact.js";
import "./Company.css";

function Company() {
  return (
    <div className="company-container">
      <div className="company-about">
        <h1>Are you looking for hands on candidate for your company?</h1>
        <p>
          Internee.pk kickstart student's tech careers with first internships,
          providing industry exposure, practical skills, and networking
          opportunities, paving the way for their success in the tech industry.
        </p>
      </div>
      <div className="company-feature">
        <div>
          <i class="fa fa-mortar-board"></i>
          <h1>7K+</h1>
          <p>Internship Provided</p>
        </div>

        <div>
          <i class="fa fa-user"></i>
          <h1>15K+</h1>
          <p>Linkedin Family</p>
        </div>
        <div>
          <i class="fa fa-tasks"></i>
          <h1>19</h1>
          <p>Courses on LMS</p>
        </div>
        <div>
          <i class="fa fa-institution"></i>
          <h1>15</h1>
          <p>Company on Board</p>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Company;
