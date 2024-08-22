import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="map-overlay">
        <h1>Project in mind? Let’s Talk 🚀</h1>
        <form>
          <div>
            <label>Name</label> <br />
            <input type="text" />
          </div>
          <div>
            <label>Email Address</label> <br />
            <input type="email" />
          </div>
          <div>
            <label>Phone Number</label> <br />
            <input type="number" />
          </div>
          <div>
            <label>Message</label> <br />
            <textarea></textarea>
          </div>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13614.833837324699!2d74.4173763!3d31.449692150000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1724353863493!5m2!1sen!2s"
        className="map-background"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contact;
