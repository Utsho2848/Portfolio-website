import React, { useRef, useState } from 'react';
import './contact.css';
import { TbBrandGmail } from "react-icons/tb";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setStatus({ type: "success", text: data.message });
      e.target.reset();
      setTimeout(() => {
      setStatus(null);
    }, 3000);
    } catch (error) {
      setStatus({ type: "error", text: "Failed to send message" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <TbBrandGmail className="contact_icon" />
            <h4>Email</h4>
            <h5>shohanurrahman6761@gmail.com</h5>
            <a href="mailto:shohanurrahman6761@gmail.com" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className="contact_icon" />
            <h4>Messenger</h4>
            <h5>Utsho Khan</h5>
            <a href="https://m.me/utsho.khan1221" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <FaWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>+8801608506761</h5>
            <a href="https://wa.me/8801608506761" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendMessage}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
          <p style={{ color: status.type === "error" ? "red" : "green", marginTop: "10px" }}>
            {status.text}
          </p>
        )}
        </form>

        
      </div>
    </section>
  );
};

export default Contact;