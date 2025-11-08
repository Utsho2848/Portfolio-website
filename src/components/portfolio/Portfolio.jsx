import React from 'react';
import './portfolio.css';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article className='portfolio_item' key={id}>
            <div className="portfolio_item_image">
              <img src={`/assets/${image}`} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;