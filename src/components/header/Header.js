import React from 'react';
import './Header.css';
import CallToAction from './CallToAction';
import Me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tunaberk Almaci</h1>
        <h5 className="text-light">Fullstack Webdeveloper</h5>
        <CallToAction />
        <HeaderSocials />
        <div className="image__container">
          <img src={Me} />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
