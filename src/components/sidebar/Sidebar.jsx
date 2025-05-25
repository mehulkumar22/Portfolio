import React, { useState } from 'react';
import './sidebar.css';
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        <a href='#home' className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                  <span className="nav__tooltip">Home</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                  <span className="nav__tooltip">About</span>
                </a>
              </li>
              <li className='nav__item'>
                <a href="#qualification" className="nav__link">
                  <i className="icon-graduation"></i>
                  <span className="nav__tooltip">Qualification</span>
                  </a>
                </li>
             
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="icon-layers"></i>
                  <span className="nav__tooltip">Projects</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                  <span className="nav__tooltip">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2025-2026</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
