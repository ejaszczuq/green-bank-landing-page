import React from "react";
import { useTranslation } from "react-i18next";

import { reviews } from "@constants/reviews";

import "./ReviewsSection.scss";

const ReviewsSection = () => {
  const { t } = useTranslation(["reviews"]);

  return (
    <section className="reviews-section">
      {reviews.map(({ quote, name, profession, picture }, index) => (
        <div className={`${name.replace(/\s+/g, "-")} review`} key={index}>
          <center className="quote-icon">
            <img src="icons/quote.png" alt="quote icon" />
          </center>

          {/* Using dangerouslySetInnerHTML here for the quote */}
          <p className="quote poppins-regular">{t(quote as any)}</p>

          <div className="profile">
            <img src={picture} alt={`${name} picture`} />
            <div className="name-and-profession">
              <p className="p-medium name">{t(name as any)}</p>
              <p className="p-small profession">{t(profession as any)}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReviewsSection;
