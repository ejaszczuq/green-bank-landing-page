import React from "react";
// import { Link } from "react-scroll";

import Button from "@components/Button/Button";
import { ReactComponent as GreenBankLogo } from "@images/logo.svg";

import "./Navbar.scss";

interface INavbar {
  sectionNames: string[];
}

const Navbar: React.FC<INavbar> = ({ sectionNames }) => {
  return (
    <nav className="nav">
      <div className="brandSection">
        <GreenBankLogo />
      </div>

      <div className="pageSections">
        {sectionNames.map((section, index) => (
          <p className="p-medium" key={index}>
            {section}
          </p>
        ))}
      </div>

      <div className="btnSection">
        <Button variant="secondary">Contact</Button>
      </div>
    </nav>
  );
};

export default Navbar;
