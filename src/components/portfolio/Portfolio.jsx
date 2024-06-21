import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/assets/portfolio1.jpg'
import IMG2 from '../../assets/assets/portfolio2.jpg'
import IMG3 from '../../assets/assets/portfolio3.jpg'
import IMG4 from '../../assets/assets/portfolio4.jpg'
import IMG5 from '../../assets/assets/portfolio5.png'
import IMG6 from '../../assets/assets/portfolio4.jpg'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio-container">
                <article className='portfolio_item'>
                    <div className="portfolio_item_image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://preview.themeforest.net/item/newspaper/full_screen_preview/5489609?_ga=2.16366454.13177013.1718984314-1019416574.1642010955&_gac=1.47793749.1718984314.CjwKCAjwydSzBhBOEiwAj0XN4PBjxWEGuys8Q9mHQxl3-52vUJGz9RMyhuYLdCAWmhhDyPfwmgmYoRoCYYoQAvD_BwE" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item_image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://preview.themeforest.net/item/newspaper/full_screen_preview/5489609?_ga=2.16366454.13177013.1718984314-1019416574.1642010955&_gac=1.47793749.1718984314.CjwKCAjwydSzBhBOEiwAj0XN4PBjxWEGuys8Q9mHQxl3-52vUJGz9RMyhuYLdCAWmhhDyPfwmgmYoRoCYYoQAvD_BwE" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item_image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://preview.themeforest.net/item/newspaper/full_screen_preview/5489609?_ga=2.16366454.13177013.1718984314-1019416574.1642010955&_gac=1.47793749.1718984314.CjwKCAjwydSzBhBOEiwAj0XN4PBjxWEGuys8Q9mHQxl3-52vUJGz9RMyhuYLdCAWmhhDyPfwmgmYoRoCYYoQAvD_BwE" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item_image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://preview.themeforest.net/item/newspaper/full_screen_preview/5489609?_ga=2.16366454.13177013.1718984314-1019416574.1642010955&_gac=1.47793749.1718984314.CjwKCAjwydSzBhBOEiwAj0XN4PBjxWEGuys8Q9mHQxl3-52vUJGz9RMyhuYLdCAWmhhDyPfwmgmYoRoCYYoQAvD_BwE" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item_image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://preview.themeforest.net/item/newspaper/full_screen_preview/5489609?_ga=2.16366454.13177013.1718984314-1019416574.1642010955&_gac=1.47793749.1718984314.CjwKCAjwydSzBhBOEiwAj0XN4PBjxWEGuys8Q9mHQxl3-52vUJGz9RMyhuYLdCAWmhhDyPfwmgmYoRoCYYoQAvD_BwE" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item_image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://preview.themeforest.net/item/newspaper/full_screen_preview/5489609?_ga=2.16366454.13177013.1718984314-1019416574.1642010955&_gac=1.47793749.1718984314.CjwKCAjwydSzBhBOEiwAj0XN4PBjxWEGuys8Q9mHQxl3-52vUJGz9RMyhuYLdCAWmhhDyPfwmgmYoRoCYYoQAvD_BwE" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;