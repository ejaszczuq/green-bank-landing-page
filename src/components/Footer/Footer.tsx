import React from "react";

import { footerLinks } from "@constants/footerLinks";
import { scrollToTop } from "@utils/scrollToTop";

import { ReactComponent as GreenBankLogo } from "@images/logo.svg";
import Button from "@components/Button/Button";

import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["common", "landing"]);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main-content">
          <div className="footer-logo">
            <button onClick={() => scrollToTop(110, 100)}>
              <GreenBankLogo />
            </button>
            <p className="p-regular description">{t("landing:footer.description")}</p>
          </div>

          <div className="footer-links">
            {footerLinks.map(({ header, content }, index) => {
              return (
                <div key={index} className="links-column">
                  <h6>{t(header as any)}</h6>

                  <div className="section-links">
                    {content.map(({ text, href }, index) => {
                      return (
                        <a key={index} href={href} target="_self" className="p-regular section-link">
                          {t(text as any)}
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
          <p className="p-small">{`${t("common:copyright")} ${currentYear} DoraDesign ${t(
            "common:all-rights-reserved"
          )}`}</p>
          <p className="p-small footer-bottom-right">
            {`${t("common:this-page-uses-cookies")}. ${t("common:see-cookies-details")} `}
            <Button href="#" variant="underlined">
              {t("common:here")}
            </Button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
