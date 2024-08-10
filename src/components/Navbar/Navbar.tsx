import React, { useEffect, useState } from "react";
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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 580);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { offset } = useScrollPosition();

  const navbarClasses = classNames("app-navbar", {
    scrolled: offset > TOP_OFFSET
  });

  return (
    <nav className={navbarClasses}>
      <div className="app-navbar-container">
        <div className="brandSection">
          <button onClick={() => scrollToTop(110, 100)}>
            {isSmallScreen ? <img src="icons/logo-icon.png" alt="logo" height={20} /> : <GreenBankLogo />}
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
