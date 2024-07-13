import React from "react";
import "./WhyUsSection.scss";
import { whyUsValues } from "@constants/whyUsValues";
import Counter from "@components/Counter";

type TWhyUsSection = {
  id?: string;
};

const WhyUsSection = ({ id }: TWhyUsSection) => {
  return (
    <div className="container" id={id}>
      {whyUsValues.map(({ number, suffix, content }, index) => (
        <div className="box" key={index}>
          <Counter number={number} suffix={suffix} title={content} />
        </div>
      ))}
    </div>
  );
};

export default WhyUsSection;
