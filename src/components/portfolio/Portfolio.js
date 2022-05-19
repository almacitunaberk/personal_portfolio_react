import React from 'react';
import Me from '../../assets/me.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Me} />
          </div>
          <h3>Name of The Project</h3>
          <a href="https://github.com/almacitunaberk" className="portfolio__item-btn">
            GitHub
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Me} />
          </div>
          <h3>Name of The Project</h3>
          <a href="https://github.com/almacitunaberk" className="portfolio__item-btn">
            GitHub
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Me} />
          </div>
          <h3>Name of The Project</h3>
          <a href="https://github.com/almacitunaberk" className="portfolio__item-btn">
            GitHub
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Me} />
          </div>
          <h3>Name of The Project</h3>
          <a href="https://github.com/almacitunaberk" className="portfolio__item-btn">
            GitHub
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Me} />
          </div>
          <h3>Name of The Project</h3>
          <a href="https://github.com/almacitunaberk" className="portfolio__item-btn">
            GitHub
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Me} />
          </div>
          <h3>Name of The Project</h3>
          <a href="https://github.com/almacitunaberk" className="portfolio__item-btn">
            GitHub
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
