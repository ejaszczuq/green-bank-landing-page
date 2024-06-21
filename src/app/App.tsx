import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Router } from "@router/router";
import { welcome } from "@utils/welcome";
import i18n from "@translations/i18n";

import "@translations/i18n";

import "@scss/reset.scss";
import "@scss/variables.scss";
import "@scss/typography.scss";
import "@scss/responsive.scss";
import "@scss/utils.scss";
import "@scss/layers.scss";
import "@scss/mixins.scss";

welcome();

const App = () => {
  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      <Router />
    </HelmetProvider>
  );
};

export default App;
