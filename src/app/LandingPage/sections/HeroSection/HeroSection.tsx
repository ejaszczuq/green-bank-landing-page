import React from "react";

import Button from "@components/Button/Button";
import Counter from "@components/Counter";
import { Card } from "./HeroSectionCard/HeroSectionCard";

import { ReactComponent as ArrowRightIcon } from "@icons/arrow.svg";

import "./HeroSection.scss";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="details">
        <h1>Discover the Perfect Credit Card for You</h1>

        <p className="p-large">
          Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take
          control of your finances today.
        </p>

        <Button variant="primary">
          Get Started
          <ArrowRightIcon />
        </Button>
        <div className="users">
          <div className="profile-pictures">
            <img src="images/profile-pictures/hadid.png" alt="hadid-profile-picture" />
            <img src="images/profile-pictures/wade.png" alt="wade-profile-picture" />
            <img src="images/profile-pictures/jenny.png" alt="jenny-profile-picture" />
          </div>
          <div className="active-users-info">
            <Counter number={10.2} suffix="k+" decimals={1} fontClass="h6" />
            <p className="p-small">Active users around the wordls</p>
          </div>
        </div>
      </div>

      <Card />
      <img src="images/layouts/hero-header-decoration.png" alt="header-decoraion" />
    </section>
  );
};

export default Hero;
