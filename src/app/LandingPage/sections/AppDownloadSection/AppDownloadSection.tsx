import React from "react";

import "./AppDownloadSection.scss";

const AppDownloadSection = () => {
  return (
    <section className="app-download-section">
      <div className="details">
        <div className="desc">
          <h2>Easy Way to manage your finances</h2>
          <p className="p-large">Easy to use mobile app that support on android and ios.</p>
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
        <img src="images/app-view.png" alt="application-view-img" />
      </div>
    </section>
  );
};

export default AppDownloadSection;
