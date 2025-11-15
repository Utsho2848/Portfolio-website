import { Link } from "react-router-dom";
import React, { useState } from "react";
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const Nav = ({ isLoggedIn }) => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <Link to="/" 
        onClick={() => setActiveNav('#')} 
        className={activeNav === '#' ? 'active' : ''}>
        <IoHomeOutline />
      </Link>

      <Link to="/about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}>
        <FaRegUser />
      </Link>

      <Link to="/experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}>
        <FaBookOpenReader />
      </Link>

      <Link to="/services" 
        onClick={() => setActiveNav('#services')} 
        className={activeNav === '#services' ? 'active' : ''}>
        <MdHomeRepairService />
      </Link>

      <Link to="/contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}>
        < MdEmail />
      </Link>


      {/* Login / Dashboard nav item */}
      {!isLoggedIn ? (
        <Link to="/login" onClick={() => setActiveNav('#login')} className={activeNav === '#login' ? 'active' : ''}>
          <IoMdContact />
        </Link>
      ) : (
        <Link to="/dashboard" onClick={() => setActiveNav('#dashboard')} className={activeNav === '#dashboard' ? 'active' : ''}>
          <MdDashboard />
        </Link>
      )}
    </nav>
  );
};

export default Nav;