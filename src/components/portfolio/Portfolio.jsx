import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/assets/portfolio1.jpg'
import IMG2 from '../../assets/assets/portfolio2.jpg'
import IMG3 from '../../assets/assets/portfolio3.jpg'
import IMG4 from '../../assets/assets/portfolio4.jpg'
import IMG5 from '../../assets/assets/portfolio5.png'
import IMG6 from '../../assets/assets/portfolio4.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Crypto Currency Dashboard & Financial Visualization",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financeial-data-visualization"
    },
    {
        id: 2,
        image: IMG2,
        title: "Charts templates & infographics in fig,a",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financeial-data-visualization"
    },
    {
        id: 3,
        image: IMG3,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financeial-data-visualization"
    },
    {
        id: 4,
        image: IMG4,
        title: "Crypto Currency Dashboard & Financial Visualization",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financeial-data-visualization"
    },
    {
        id: 5,
        image: IMG5,
        title: "Charts templates & infographics in fig,a",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financeial-data-visualization"
    },
    {
        id: 6,
        image: IMG6,
        title: "Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financeial-data-visualization"
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio-container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article className='portfolio_item' id={id}>
                                <div className="portfolio_item_image">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    );
};

export default Portfolio;