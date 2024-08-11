import React from "react";
import { useTranslation } from "react-i18next";

import "./AppDownloadSection.scss";

const AppDownloadSection = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section className="app-download-section">
      <div className="details">
        <div className="desc">
          <h2>{t("landing:app-download.title")}</h2>
          <p className="p-large">{t("landing:app-download.description")}</p>
        </div>
        <div className="download-platforms">
          <button>
            <img src="icons/download-platforms/app-store.png" alt="app-store-icon" />
          </button>
          <button>
            <img src="icons/download-platforms/google-play.png" alt="google-play-icon" />
          </button>
        </div>
      </div>
      <div className="application-view">
        <img src="images/layouts/app-view.png" alt="application-view-img" />
      </div>
    </section>
  );
};

export default AppDownloadSection;
