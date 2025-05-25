import React from 'react';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">15+</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon fas fa-code"></i> 
        <div>
          <h3 className="about__title">5000+</h3>
          <span className="about__subtitle">Lines Of Code</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">500+</h3>
          <span className="about__subtitle">Cup of Coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i> 
        <div>
          <h3 className="about__title">10+</h3>
          <span className="about__subtitle">Hackathon Participation</span>
        </div>
      </div>

    </div>
  );
};

export default AboutBox;
