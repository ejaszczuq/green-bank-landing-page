import React from "react";
import "./LandingPage.scss";
import Navbar from "@components/Navbar/Navbar";

const LandingPage = () => {
  const tab = ["Why Us", "Services", "Our Process", "Payments", "FAQs"];
  return <Navbar sectionNames={tab} btnName="Contact" />;
};

export default (
  <>
    <LandingPage />
  </>
);
