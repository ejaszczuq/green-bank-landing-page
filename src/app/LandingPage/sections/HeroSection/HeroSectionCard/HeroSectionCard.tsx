import React from "react";

import "./HeroSectionCard.scss";

export const Card = () => {
  return (
    <section className="hero-section-card">
      <div className="card-container">
        <img src="images/credit-cards/credit-card-hero.png" className="credit-card" alt="credit-card-img" />
        <img src="icons/circle.png" className="circle" alt="circle-icon" />
      </div>
    </section>
  );
};
