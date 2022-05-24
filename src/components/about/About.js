import React from 'react';
import AboutImage from '../../assets/me.png';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { BsFolderFill } from 'react-icons/bs';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__image">
          <div className="about__image-me">
            <img src={AboutImage} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__content__cards">
            <div className="about__content__cards-card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small className="text-light">2+ Years Experience</small>
            </div>

            <div className="about__content__cards-card">
              <MdOutlinePeopleAlt className="about__icon" />
              <h5>Industry</h5>
              <small className="text-light">2+ Years Experience</small>
            </div>

            <div className="about__content__cards-card">
              <BsFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small className="text-light">Fullstack Projects</small>
            </div>
          </div>
          <p>
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
