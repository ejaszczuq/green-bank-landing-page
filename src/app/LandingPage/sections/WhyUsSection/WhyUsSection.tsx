import React from "react";

import { whyUsValues } from "@constants/whyUsValues";
import Counter from "@components/Counter";

import "./WhyUsSection.scss";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us-section">
      {whyUsValues.map(({ number, suffix, content, decimals }, index) => (
        <div className="box" key={index}>
          <Counter number={number} suffix={suffix} title={content} decimals={decimals} fontClass="h2" />
        </div>
      ))}
    </section>
  );
};

export default WhyUsSection;
