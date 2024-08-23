import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [error, setError] = useState({});
  const [toast, setToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newError = {};
    if (!formData.name) newError.name = "Enter Name";

    if (!formData.email) {
      newError.email = "Enter Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email address is invalid";
    }

    if (!formData.phone) newError.phone = "Enter Phone Number";

    if (!formData.message) newError.phone = "Enter Message";

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      localStorage.setItem("ContactFormData", JSON.stringify(formData));

      const storedData = localStorage.getItem("ContactFormData");
      console.log("Stored Data:", JSON.parse(storedData));
      setToast(true);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setToast(false);
    }, 3000);
  };
  return (
    <div className="contact-container">
      <div className="map-overlay">
        <h1>Project in mind? Let’s Talk 🚀</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label> <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {error.name && <p className="error">{error.name}</p>}
          </div>
          <div>
            <label>Email Address</label> <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <p className="error">{error.email}</p>}
          </div>
          <div>
            <label>Phone Number</label> <br />
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {error.phone && <p className="error">{error.phone}</p>}
          </div>
          <div>
            <label>Message</label> <br />
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {error.message && <p className="error">{error.message}</p>}
          </div>
          <button className="contact-btn" type="submit">
            Send
          </button>
          <p className="contact-instruction">
            After your message submission, Our team will respond 1-2 Business
            days
          </p>
        </form>
        {toast && <div className="toast">Message sent successfully!</div>}
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
