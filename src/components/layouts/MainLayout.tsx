import React from "react";

import "./MainLayout.scss";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

interface ILayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: ILayout) => {
  return (
    <div className="main-layout">
      <div className="nav-section">
        <Navbar />
      </div>

      <main className="main-section">{children}</main>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
