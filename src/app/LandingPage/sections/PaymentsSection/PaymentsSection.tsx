import React from "react";

import "./PaymentsSection.scss";

import Button from "@components/Button/Button";

const PaymentsSection = () => {
  return (
    <section className="payments-section" id="payments">
      <img src="images/credit-cards/payments-cards.png" alt="payments-cards-img" />
      <div className="details">
        <h3>Find the Perfect Credit Card for You</h3>
        <p className="p-regular">
          Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and
          lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit
          card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and
          aspirations.
        </p>
        <Button variant="primary">Learn More</Button>
      </div>
    </section>
  );
};
export default PaymentsSection;
