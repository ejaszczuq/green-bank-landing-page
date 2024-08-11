import React from "react";
import { useTranslation } from "react-i18next";

import { whyUsValues } from "@constants/whyUsValues";
import Counter from "@components/Counter";

import "./WhyUsSection.scss";

const WhyUsSection = () => {
  const { t } = useTranslation(["whyUs"]);

  return (
    <section id="why-us" className="why-us-section">
      {whyUsValues.map(({ number, suffix, content, decimals }, index) => (
        <div className="box" key={index}>
          <Counter
            number={t(number as any)}
            suffix={t(suffix as any)}
            title={t(content as any)}
            decimals={t(decimals as any)}
            fontClass="h2"
          />
        </div>
      ))}
    </section>
  );
};

export default WhyUsSection;
