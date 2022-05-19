import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './Nav.css';

const Nav = () => {
  const [activeClass, setActiveClass] = useState('');
  return (
    <nav className="nav__container">
      <a
        onClick={() => setActiveClass('home')}
        className={`nav__container__link ${activeClass === 'home' && 'active'}`}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActiveClass('about')}
        className={`nav__container__link ${activeClass === 'about' && 'active'}`}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActiveClass('experiences')}
        className={`nav__container__link ${activeClass === 'experiences' && 'active'}`}
        href="#experiences"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveClass('services')}
        className={`nav__container__link ${activeClass === 'home' && 'services'}`}
        href="#services"
      >
        <FaHandshake />
      </a>
      <a
        onClick={() => setActiveClass('contact')}
        className={`nav__container__link ${activeClass === 'contact' && 'active'}`}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
