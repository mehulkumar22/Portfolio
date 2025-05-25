import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualification</h2>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="fas fa-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="fas fa-briefcase qualification__icon"></i>
            Experience
          </div>
        </div>
        
        <div className="qualification__sections">


          {/* Education Content */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor in Computer Science</h3>
                <span className="qualification__subtitle">Kakinga Institute of Industrial Technology, Bhubaneshwar - Odisha</span>
                <div className="qualification__calendar">
                  <i className="fas fa-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">12th Standard</h3>
                <span className="qualification__subtitle">Litera Valley School, Patna - Bihar</span>
                <div className="qualification__calendar">
                  <i className="fas fa-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th Standard</h3>
                <span className="qualification__subtitle">Annie Besant International School, Patna - Bihar</span>
                <div className="qualification__calendar">
                  <i className="fas fa-calendar-alt"></i> 2018 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              
            </div>

            
          </div>

          {/* Experience Content */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Self - Learning</span>
                <div className="qualification__calendar">
                  <i className="fas fa-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Video Editor</h3>
                <span className="qualification__subtitle">IOT Lab, KIIT University</span>
                <div className="qualification__calendar">
                  <i className="fas fa-calendar-alt"></i> 2023 - 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Self - Learning</span>
                <div className="qualification__calendar">
                  <i className="fas fa-calendar-alt"></i> 2022 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
