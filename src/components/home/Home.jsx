import React from 'react';
import './home.css';
import Me from '../../assets/avatar-1.svg';
// import Me from '../../assets/profile.gif';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Mehul Kumar</h1>
        <span className="home__education">I'm a Full Stack Developer</span>
        <HeaderSocials />
        <a href="https://drive.google.com/file/d/1BG-JWleWhaVvqMvxQE0xS13lL1gRec5e/view?usp=drive_link" className="btn" target="_blank">Resume</a>
        <ScrollDown />
     {/* <Shapes /> */}
      </div>
 
    </section>
  );
};

export default Home;
