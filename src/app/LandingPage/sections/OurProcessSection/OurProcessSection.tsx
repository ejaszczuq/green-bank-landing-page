import React from "react";

import "./OurProcessSection.scss";
import Button from "@components/Button/Button";

const OurProcessSection = () => {
  return (
    <div className="our-process-section" id="our-process">
      <div className="details">
        <h3>Design your personalized credit card.</h3>
        <p className="p-regular">
          You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that
          makes you feel extraordinary
        </p>
        <Button variant="primary">
          Create New Card <img src="icons/arrow.png" alt="arrow-icon" />
        </Button>
      </div>
      <div className="cards-container">
        <img src="images/credit-cards/our-process-cards/first-card.png" alt="first-card-img" />
        <img src="images/credit-cards/our-process-cards/sec-card.png" alt="sec-card-img" />
        <img src="images/credit-cards/our-process-cards/third-card.png" alt="third-card-img" />
      </div>
    </div>
  );
};

export default OurProcessSection;
