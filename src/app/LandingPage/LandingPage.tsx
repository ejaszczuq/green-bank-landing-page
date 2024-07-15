import React from "react";

import "./LandingPage.scss";

import MainLayout from "@components/layouts/MainLayout";
import WhyUsSection from "./sections/WhyUsSection/WhyUsSection";
import CompaniesSection from "./sections/CompaniesSection/CompaniesSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ReviewsSection from "./sections/ReviewsSection/ReviewsSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div style={{ width: "100%", minHeight: "40vh" }}>Content 0 - hero</div>
      <WhyUsSection />
      <CompaniesSection />
      <ServicesSection />
      <div style={{ width: "100%", minHeight: "40vh" }} id="our-process">
        Content 3 - our process
      </div>
      <div style={{ width: "100%", minHeight: "40vh" }} id="payments">
        Content 4 - payments
      </div>
      <ReviewsSection />
      <div style={{ width: "100%", minHeight: "70vh" }} id="faqs">
        Content 5 - faqs
      </div>
    </div>
  );
};

export default (
  <MainLayout>
    <LandingPage />
  </MainLayout>
);
