import React from "react";
import img from "../../assest/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-img">
        <img src={img} alt="logo" />
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
      </div>
      <div>
        <h1>Socialize with us</h1>
        <div className="footer-icons">
          <a href="https://www.youtube.com/@InterneePk" target="_blank">
            <i class="fa fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/internee.pk/" target="_blank">
            <i class="fa fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/p/Interneepk-100093222249320/?paipv=0&eav=AfYXIkKRuTl67hdjTOzbcStg5LMe3Vpw1FLiCUaYEuctQy0U3USp0g8HAGJNrzKDvx8&_rdr"
            target="_blank"
          >
            <i class="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/Internee_pk" target="_blank">
            <i class="fa fa-twitter"></i>
          </a>
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
