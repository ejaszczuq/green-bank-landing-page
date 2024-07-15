import React from "react";

import { companies } from "@constants/companies";

import "./CompaniesSection.scss";

const CompaniesSection = () => {
  return (
    <section className="companies-section">
      <div className="logos-wrapper">
        {Array.from({ length: 2 }).map((_, i) =>
          companies.map((company, index) => (
            <img key={`${i}-${index}`} src={company.src} alt={company.title} className="logo" />
          ))
        )}
      </div>
    </section>
  );
};

export default CompaniesSection;
