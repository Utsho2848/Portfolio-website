import React, { useRef } from 'react';
import './contact.css';
import { TbBrandGmail } from "react-icons/tb";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  // using email.js
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6q9h205',
        'template_f407swj',
        form.current,
        'TM_xISKNzCvC9Nk5O'
      )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('Failed to send message. Please try again.');
        }
      );

    e.target.reset();
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
            <a
              href="https://wa.me/8801608506761"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;