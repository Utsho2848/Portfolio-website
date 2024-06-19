import React, { useState } from 'react';
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#' ? 'active' : '')}><IoHomeOutline /></a>
            <a href="#about" onClick={() => setActiveNav('#about' ? 'active' : '')}><FaRegUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience' ? 'active' : '')}><FaBookOpenReader /></a>
            <a href="#services" onClick={() => setActiveNav('#services' ? 'active' : '')}><MdHomeRepairService /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact' ? 'active' : '')}><IoMdContact /></a>
        </nav>
    );
};

export default Nav;