import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsFolderFill } from 'react-icons/bs';
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
        onClick={() => setActiveClass('experience')}
        className={`nav__container__link ${activeClass === 'experience' && 'active'}`}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveClass('portfolio')}
        className={`nav__container__link ${activeClass === 'portfolio' && 'active'}`}
        href="#portfolio"
      >
        <BsFolderFill />
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
