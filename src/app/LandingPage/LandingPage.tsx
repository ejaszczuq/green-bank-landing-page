import React from "react";

import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

import "./LandingPage.scss";

const LandingPage = () => {
  const tab = ["Why Us", "Services", "Our Process", "Payments", "FAQs"];

  return (
    <div className="landing-page">
      <Navbar sectionNames={tab} />

      <div style={{ width: "100%", minHeight: "120vh" }}>Content</div>

      <Footer />
    </div>
  );
};

export default <LandingPage />;
