import React from 'react';
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>UK Creation</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='footer_socials'>
                <a target='_blank' rel="noreferrer" href="https://www.facebook.com/utsho.khan1221"><FaFacebook /></a>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com"><FaInstagramSquare /></a>
                <a href="mailto:shohanurrahman6761@gmail.com?subject=Hello&body=I saw your portfolio...">
  <TbBrandGmail />
</a>

            </div>
            <div className="footer_copyright">
                <small>&copy; UK Creation. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;