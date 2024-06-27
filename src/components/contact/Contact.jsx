import React, { useRef } from 'react';
import './contact.css'
import { TbBrandGmail } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contatc = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5m9rsnr', 'template_3mh6l8a', form.current, 'TM_xISKNzCvC9Nk5O');
        e.target.reset()
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <TbBrandGmail className='contact_icon' />
                        <h4>Email</h4>
                        <h5>utsho2848@gmail.com</h5>
                        <a href="mailto:utsho2848@gmail.com" target='_blank'>Send a Message</a>
                    </article>
                    <article className='contact_option'>
                        <FaFacebookMessenger className='contact_icon' />
                        <h4>Messanger</h4>
                        <h5>Utsho Khan</h5>
                        <a href="https://m.me/utsho.khan1221" target='_blank'>Send a Message</a>
                    </article>
                    <article className='contact_option'>
                        <FaWhatsapp className='contact_icon' />
                        <h4>WhatsApp</h4>
                        <h5>+8801608506761</h5>
                        <a href="https://whatsapp.com/send?phone+8801608506761" target='_blank'>Send a Message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contatc;