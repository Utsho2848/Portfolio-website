import React from 'react';
import './experience.css';
import { LuBadgeCheck } from "react-icons/lu";
import experienceData from '../../data/experience.json';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What's Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {experienceData.map(({ category, skills }, index) => (
          <div className={`experience_${category.toLowerCase().split(' ')[0]}`} key={index}>
            <h3>{category}</h3>
            <div className="experience_content">
              {skills.map(({ name, level }, i) => (
                <article className="experience_details" key={i}>
                  <LuBadgeCheck className='experience_details_icon' />
                  <div>
                    <h4>{name}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;