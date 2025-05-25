import React, { useState, useEffect } from 'react';
import './portfolio.css';
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState("Best");

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) =>
      curElem.category.includes(categoryItem)
    );
    setItems(updatedItems);
    setActiveFilter(categoryItem);
  };

  const showAllProjects = () => {
    setItems(Menu);
    setActiveFilter("All");
  };

  useEffect(() => {
    filterItem(showAllProjects);
  }, []);

  const filterClass = (category) =>
    activeFilter === category ? "work__item active-work" : "work__item";

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__filters">
        <span className={filterClass("All")} onClick={showAllProjects}>All</span>
        <span className={filterClass("Frontend")} onClick={() => filterItem("Frontend")}>Frontend</span>
        <span className={filterClass("Backend")} onClick={() => filterItem("Backend")}>Backend</span>
        <span className={filterClass("Fullstack")} onClick={() => filterItem("Fullstack")}>Fullstack</span>
      </div>

      <div className="work__container grid">
        {items.map(({ id, image, title, description, category, github, live, techStack }) => (
          <div className="work__card" key={id}>
            <div className="work__thumbnail">
              <img src={image} alt={title} className="work__img" />
              <div className="work__mask"></div>
            </div>

            <span className="work__category">{category.join(', ')}</span>
            <div className="work__techStack">
              {techStack && techStack.map((logo, index) => (
                <img src={logo} alt={`tech-${index}`} key={index} />
              ))}
            </div>

            <h3 className="work__title">{title}</h3>

            {description && <p className="work__description">{description}</p>}

            <div className="work__buttons">
              <a href={github} className="work__button" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.gif" alt="GitHub" className="work__button-img" />
              </a>
              <a href={live} className="work__button" target="_blank" rel="noopener noreferrer">
                <img src="/icons/link.gif" alt="Live Demo" className="work__button-img" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
