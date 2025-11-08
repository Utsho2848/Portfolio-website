import React from 'react';
import './about.css'
import ME from '../../assets/assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={ME} alt="about image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>Only personal Project</small>
                        </article>


                        <article className="about_card">
                            <FaRegUser className='about_icon' />
                            <h5>Clients</h5>
                            <small>no clients at all</small>
                        </article>


                        <article className="about_card">
                            <FaFileCode className='about_icon' />
                            <h5>Projects</h5>
                            <small>10+ personal project</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, soluta!</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;