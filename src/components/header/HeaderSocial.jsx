import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href="https://linkedin.com" target='_blank'><FaLinkedinIn /></a>
            <a href="https://github.com" target='_blank'><FaGithub /></a>
            <a href="https://gmail.com" target='_blank'><TbBrandGmail /></a>
        </div>
    );
};

export default HeaderSocial;