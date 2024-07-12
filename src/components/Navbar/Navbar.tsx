import React, { useEffect, useState } from "react";
import classNames from "classnames";

import useScrollPosition from "@hooks/useScrollPosition";
import { scrollToTop } from "@scss/utils/scrollToTop";
import { navLinks } from "@constants/navLinks";

import { ReactComponent as GreenBankLogo } from "@images/logo.svg";
import Button from "@components/Button/Button";
import NavbarLink from "@components/NavbarLink/NavbarLink";

import "./Navbar.scss";

const TOP_OFFSET = 20;

const Navbar = () => {
  const { offset } = useScrollPosition();
  const [hasActiveLink, setHasActiveLink] = useState(false);

  useEffect(() => {
    const handler = () => setHasActiveLink(document.querySelectorAll(".navbar-active-link").length > 0);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navbarClasses = classNames("app-navbar", {
    scrolled: offset > TOP_OFFSET,
    "active-link-present": hasActiveLink
  });

  return (
    <nav className={navbarClasses}>
      <div className="app-navbar-container">
        <div className="brandSection">
          <button onClick={scrollToTop}>
            <GreenBankLogo />
          </button>
        </div>

        <ul className="pageSections">
          {navLinks.map(({ sectionID, label }, index) => (
            <li key={index}>
              <NavbarLink sectionID={sectionID} className="p-medium">
                {label}
              </NavbarLink>
            </li>
          ))}
        </ul>

        <div className="btnSection">
          <Button variant="secondary">Contact</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
