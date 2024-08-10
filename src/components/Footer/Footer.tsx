import React from "react";

import { footerLinks } from "@constants/footerLinks";

import { ReactComponent as GreenBankLogo } from "@images/logo.svg";
import Button from "@components/Button/Button";

import "./Footer.scss";
import { scrollToTop } from "@utils/scrollToTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main-content">
          <div className="footer-logo">
            <button onClick={() => scrollToTop(110, 100)}>
              <GreenBankLogo />
            </button>
            <p className="p-regular">
              Discover the power of our secure and <br /> rewarding credit cards
            </p>
          </div>

          <div className="footer-links">
            {footerLinks.map(({ header, content }, index) => {
              return (
                <div key={index} className="links-column">
                  <h6>{header}</h6>

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
