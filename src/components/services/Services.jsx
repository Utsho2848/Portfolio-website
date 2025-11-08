import React from 'react';
import './services.css';
import { FaCheck } from "react-icons/fa";
import servicesData from '../../data/services.json';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        {servicesData.map(({ id, title, features }) => (
          <article className='service' key={id}>
            <div className="service_head">
              <h3>{title}</h3>
            </div>
            <ul className='service_list'>
              {features.map((feature, index) => (
                <li key={index}>
                  <FaCheck className='service_list_icon' />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;