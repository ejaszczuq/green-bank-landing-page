import React from "react";

import { whyUsValues } from "@constants/whyUsValues";
import Counter from "@components/Counter";

import "./WhyUsSection.scss";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us-section">
      {whyUsValues.map(({ number, suffix, content, decimal }, index) => (
        <div className="box" key={index}>
          <Counter number={number} suffix={suffix} title={content} decimal={decimal} />
        </div>
      ))}
    </section>
  );
};

export default WhyUsSection;
