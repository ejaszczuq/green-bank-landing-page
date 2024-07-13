import React from "react";

import "./LandingPage.scss";

import MainLayout from "@components/layouts/MainLayout";
import WhyUsSection from "./sections/WhyUsSection/WhyUsSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <center>
        <div style={{ width: "100%", minHeight: "40vh" }}>Content 0 - hero</div>

        <WhyUsSection id="why-us" />

        <div style={{ width: "100%", minHeight: "40vh" }} id="services">
          Content 2 - services
        </div>
        <div style={{ width: "100%", minHeight: "40vh" }} id="our-process">
          Content 3 - our process
        </div>
        <div style={{ width: "100%", minHeight: "40vh" }} id="payments">
          Content 4 - payments
        </div>
        <div style={{ width: "100%", minHeight: "70vh" }} id="faqs">
          Content 5 - faqs
        </div>
      </center>
    </div>
  );
};

export default (
  <MainLayout>
    <LandingPage />
  </MainLayout>
);
