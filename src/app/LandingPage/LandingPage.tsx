import React from "react";

import "./LandingPage.scss";

import MainLayout from "@components/layouts/MainLayout";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div style={{ width: "100%", minHeight: "40vh" }}>Content 1</div>
      <div style={{ width: "100%", minHeight: "120vh" }}>Content 2</div>
      <div style={{ width: "100%", minHeight: "40vh" }}>Content 3</div>
    </div>
  );
};

export default (
  <MainLayout>
    <LandingPage />
  </MainLayout>
);
