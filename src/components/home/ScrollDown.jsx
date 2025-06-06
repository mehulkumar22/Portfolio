import React from 'react'

export const ScrollDown = () => {
  return (
    <div className="scroll__down">
        <a href="#about" className="mouse__wrapper"></a>
        <span className="home__scroll-name">Scroll Down</span>
        <span className="mouse">
            <span className="wheel"></span>
        </span>
    </div>
  );
};

export default ScrollDown;