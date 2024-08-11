import React from "react";

import Button from "@components/Button/Button";
import Counter from "@components/Counter";
import { Card } from "./HeroSectionCard/HeroSectionCard";

import { ReactComponent as ArrowRightIcon } from "@icons/arrow.svg";

import "./HeroSection.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation(["landing", "common"]);

  return (
    <section className="hero-section">
      <div className="details">
        <h1>{t("landing:hero.title")}</h1>

        <p className="p-large">{t("landing:hero.description")}</p>

        <Button variant="primary">
          {t("common:get-started")}
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
