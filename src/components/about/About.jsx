import React from 'react';
import './about.css';
import Image from "../../assets/avatar.jpg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="About me" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm a Full Stack Developer passionate about building dynamic, responsive web applications. With experience in both front-end and back-end technologies, I love turning ideas into functional, user-friendly solutions while continuously learning and growing in the tech world.
            </p>
            <a href="#contact" className="btn">Contact Me </a>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}

export default About;
