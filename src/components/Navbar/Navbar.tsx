import React from "react";

import "./Navbar.scss";

import { ReactComponent as GreenBankLogo } from "@images/logo.svg";

interface INavbar {
  sectionNames: string[];
  btnName: string;
}

const Navbar: React.FC<INavbar> = ({ sectionNames, btnName }) => {
  return (
    <div className="nav">
      <div className="brandSection">
        <GreenBankLogo />
      </div>
      <div className="pageSections">
        {sectionNames.map((section, index) => (
          <p key={index}>{section}</p>
        ))}
      </div>
      <div className="btnSection">
        <button>{btnName}</button>
      </div>
    </div>
  );
};

export default Navbar;
