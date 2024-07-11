import React from "react";
import { Link } from "react-scroll";

import "./NavbarLink.scss";

interface INavbarLink {
  children: React.ReactNode;
  sectionID: string;
  offsetTopDesktop?: number;
  offsetTopMobile?: number;
  smooth?: boolean;
  duration?: number;
  className?: string;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavbarLink = ({
  children,
  sectionID,
  offsetTopDesktop = -32,
  offsetTopMobile = 0,
  smooth = true,
  duration = 110,
  className,
  isMobile = false,
  onClick
}: INavbarLink) => {
  const offsetTop = isMobile ? offsetTopMobile : offsetTopDesktop;

  const navbarLinkClass = `navbar-link`;
  const navbarLinkActiveClass = `navbar-active-link`;

  return (
    <Link
      to={sectionID}
      offset={offsetTop}
      smooth={smooth}
      duration={duration}
      className={`${navbarLinkClass} ${className}`}
      activeClass={navbarLinkActiveClass}
      onClick={onClick}
      spy
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
