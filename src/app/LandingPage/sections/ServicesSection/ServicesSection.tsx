import React from "react";
import { useTranslation } from "react-i18next";

import { services } from "@constants/services";

import "./ServicesSection.scss";

const CompaniesSection = () => {
  const { t } = useTranslation(["common", "landing"]);

  return (
    <section className="services-section" id="services">
      <center>
        <h3>What do we offer?</h3>
      </center>

      <div className="services-container">
        {services.map(({ header, src, desc }) => (
          <div className="service-box" key={header}>
            <div className="icon-container">
              <center>
                <img src={src} alt={`${header}-icon`} />
              </center>
            </div>

            <div className="header-and-desc">
              <h5 className="h5-medium">{t(header as any)}</h5>
              <p className="p-regular">{t(desc as any)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
