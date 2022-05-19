import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="experience__card-header">Frontend Development</h3>
          <div className="skills">
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>Redux</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>SASS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>BEM</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3 className="experience__card-header">Backend Development</h3>
          <div className="skills">
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>Express</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>GoLang</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>Kotlin</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill__content">
              <BsFillPatchCheckFill className="skill__icon" />
              <h4>GraphQL</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
