import React, { useState, useEffect } from "react";
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    const response = await fetch("https://formspree.io/f/xvgjljwl", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setShowPopup(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <h1 className="contact-title">Contact Me</h1>

        <div className="contact-container">

          <div className="contact-left">
            <h2>Contact Information</h2>

            <p className="info-item">
              <FaPhoneAlt className="info-icon" /> <span>6282943804</span>
            </p>

            <p className="info-item">
              <FaEnvelope className="info-icon" /> <span>noorunnizaey@gmail.com</span>
            </p>

            <p className="info-item">
              <FaMapMarkerAlt className="info-icon" /> <span>Kerala, India</span>
            </p>

            <h3 className="follow-title">Follow Me</h3>

            <div className="social-links">
              <a href="https://instagram.com/noorunniza_" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon" />
              </a>

              <a href="https://github.com/Noorunniza" target="_blank" rel="noreferrer">
                <FaGithub className="social-icon" />
              </a>

              <a href="https://linkedin.com/in/noorunniza-e-y" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="checkmark">
              <span>✔</span>
            </div>
            <p>Message Sent Successfully!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
