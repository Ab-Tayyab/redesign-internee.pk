import React from "react";
import img from '../../assest/logo.png'
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-img">
        <img src={img}alt="logo" />
      </div>
      <div>
        <h1>Company</h1>
        <h5>Contact Us</h5>
        <h5>Privacy & Policy</h5>
        <h5>Terms & Condition</h5>
      </div>
      <div>
        <h1>Get Help</h1>
        <h5>Training Video</h5>
        <h5>Request Help</h5>
        <h5></h5>
      </div>
      <div>
        <h1>Socialize with us</h1>
        <div className="footer-icons">
        <i class="fa fa-instagram" ></i>
        <i class="fa fa-facebook" ></i>
        <i class="fa fa-youtube" ></i>
        <i class="fa fa-whatsapp" ></i>
        </div>
        <h5>+923453191638</h5>
        <h5>nfo@internee.pk</h5>
        <h5>Copyright ©2024 internee.pk Pvt Ltd.</h5>
        <h5>All rights reserved.</h5>
      </div>
    </div>
  );
}

export default Footer;
