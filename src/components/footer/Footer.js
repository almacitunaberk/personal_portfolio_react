import React from 'react';
import './Footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <h2 className="footer__header">Tunaberk Almaci</h2>
        <div className="nav__links__container">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social__links__container">
          <a className="social__link" href="https://linkedin.com/in/tunaberk-almaci" target="_blank">
            <BsLinkedin className="social__link" />
          </a>
          <a className="social__link" href="https://github.com/almacitunaberk" target="_blank">
            <BsGithub className="social__link" />
          </a>
        </div>
        <h5>&copy; Tunaberk Almaci. All rights reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
