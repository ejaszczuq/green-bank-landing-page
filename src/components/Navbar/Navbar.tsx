import React from "react";

import Button from "@components/Button/Button";
import { ReactComponent as GreenBankLogo } from "@images/logo.svg";

import useScrollPosition from "@hooks/useScrollPosition";
import { animateScroll } from "react-scroll";

import classNames from "classnames";

import "./Navbar.scss";
import NavbarLink from "@components/NavbarLink/NavbarLink";
import { navLinks } from "@constants/navLinks";

const TOP_OFFSET = 32;

const Navbar = () => {
  const { offset } = useScrollPosition();

  const names = classNames("app-navbar", { scrolled: offset > TOP_OFFSET });

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 110, // Adjust duration for desired scrolling speed (milliseconds)
      behavior: "smooth",
      delay: 100 // Set a shorter delay (in milliseconds)
    });
  };

  return (
    <nav className={names}>
      <div className="app-navbar-container">
        <div className="brandSection">
          <button onClick={scrollToTop}>
            <GreenBankLogo />
          </button>
        </div>

        <div className="pageSections">
          {navLinks.map(({ sectionID, offsetTopDesktop, offsetTopMobile, label }, index) => {
            return (
              <NavbarLink
                key={index}
                isMobile
                sectionID={sectionID}
                offsetTopDesktop={offsetTopDesktop}
                offsetTopMobile={offsetTopMobile}
                // onClick={}
                className="p-medium"
              >
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
