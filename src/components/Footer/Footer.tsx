import React from "react";

import { footerLinks } from "@constants/footerLinks";

import { ReactComponent as GreenBankLogo } from "@images/logo.svg";
import Button from "@components/Button/Button";

import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main-content">
          <div className="footer-logo">
            <GreenBankLogo />
            <p className="p-regular">
              Discover the power of our secure and <br /> rewarding credit cards
            </p>
          </div>

          <div className="footer-links">
            {footerLinks.map(({ header, content }, index) => {
              return (
                <div key={index} className="links-column">
                  <p className="p-regular-bold">{header}</p>

                  <div className="section-links">
                    {content.map(({ text, href }, index) => {
                      return (
                        <a key={index} href={href} target="_self" className="p-regular section-link">
                          {text}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="p-small">copyright {currentYear} DoraDesign All Rights Reserved</p>
          <p className="p-small footer-bottom-right">
            This page uses cookies. See cookies details{" "}
            <Button href="#" variant="underlined">
              here
            </Button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
