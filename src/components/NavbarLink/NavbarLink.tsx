import React from "react";
import { Link } from "react-scroll";
import classNames from "classnames";

import useScrollPosition from "@hooks/useScrollPosition";

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
  offsetTopDesktop = -128,
  offsetTopMobile = 0,
  smooth = true,
  duration = 110,
  className,
  isMobile = false,
  onClick
}: INavbarLink) => {
  const offsetTop = isMobile ? offsetTopMobile : offsetTopDesktop;

  const { offset } = useScrollPosition();

  const isScrolledToTop = offset === 0;

  const navbarLinkClass = classNames(`navbar-link`, { scrolledToTop: isScrolledToTop }, className);
  const navbarLinkActiveClass = `navbar-active-link navbar-link-active`;

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
