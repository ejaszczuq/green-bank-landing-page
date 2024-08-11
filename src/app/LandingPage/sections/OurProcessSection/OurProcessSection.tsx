import React from "react";

import Button from "@components/Button/Button";

import { ReactComponent as ArrowRightIcon } from "@icons/arrow.svg";

import "./OurProcessSection.scss";
import { useTranslation } from "react-i18next";

const OurProcessSection = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section className="our-process-section" id="our-process">
      <div className="details">
        <h3>{t("landing:our-process.title")}</h3>
        <p className="p-regular">{t("landing:our-process.description")}</p>
        <Button variant="primary">
          {t("landing:our-process.button-txt")} <ArrowRightIcon />
        </Button>
      </div>
      <div className="cards-container">
        <img src="images/credit-cards/our-process-cards/first-card.png" alt="first-card-img" />
        <img src="images/credit-cards/our-process-cards/sec-card.png" alt="sec-card-img" />
        <img src="images/credit-cards/our-process-cards/third-card.png" alt="third-card-img" />
      </div>
    </section>
  );
};

export default OurProcessSection;
