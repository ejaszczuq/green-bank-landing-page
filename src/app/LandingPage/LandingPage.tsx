import React from "react";

import "./LandingPage.scss";

import MainLayout from "@components/layouts/MainLayout";
import WhyUsSection from "./sections/WhyUsSection/WhyUsSection";
import CompaniesSection from "./sections/CompaniesSection/CompaniesSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ReviewsSection from "./sections/ReviewsSection/ReviewsSection";
import Hero from "./sections/HeroSection/HeroSection";
import AppDownloadSection from "./sections/AppDownloadSection/AppDownloadSection";
import OurProcessSection from "./sections/OurProcessSection/OurProcessSection";
import PaymentsSection from "./sections/PaymentsSection/PaymentsSection";
import FAQsSection from "./sections/FAQsSection/FAQsSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <WhyUsSection />
      <CompaniesSection />
      <ServicesSection />
      <OurProcessSection />
      <PaymentsSection />
      <ReviewsSection />
      <FAQsSection />
      <AppDownloadSection />
    </div>
  );
};

export default (
  <MainLayout>
    <LandingPage />
  </MainLayout>
);
