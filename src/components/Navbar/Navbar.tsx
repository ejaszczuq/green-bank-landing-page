import React from "react";
import classNames from "classnames";

import useScrollPosition from "@hooks/useScrollPosition";
import { scrollToTop } from "@utils/scrollToTop";
import { navLinks } from "@constants/navLinks";

import { ReactComponent as GreenBankLogo } from "@images/logo.svg";
import Button from "@components/Button/Button";
import NavbarLink from "@components/NavbarLink/NavbarLink";

import "./Navbar.scss";

const TOP_OFFSET = 20;

const Navbar = () => {
  const { offset } = useScrollPosition();

  const navbarClasses = classNames("app-navbar", {
    scrolled: offset > TOP_OFFSET
  });

  return (
    <nav className={navbarClasses}>
      <div className="app-navbar-container">
        <div className="brandSection">
          <button onClick={() => scrollToTop(110, 100)}>
            <img src="icons/logo-icon.png" alt="logo" height={20} className="logo-mobile" />
            <GreenBankLogo className="logo-desktop" />
          </button>
        </div>

        <div className="navbar-links">
          {navLinks.map(({ sectionID, label }) => {
            return (
              <NavbarLink key={sectionID} sectionID={sectionID} className="p-medium">
                {label}
              </NavbarLink>
            );
          })}
        </div>

        <div className="btnSection">
          <Button variant="secondary">Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
