import React from "react";
import { useTranslation } from "react-i18next";

import Button from "@components/Button/Button";

import "./PaymentsSection.scss";

const PaymentsSection = () => {
  const { t } = useTranslation(["landing", "common"]);

  return (
    <section className="payments-section" id="payments">
      <img src="images/credit-cards/payments-cards.png" alt="payments-cards-img" />

      <div className="details">
        <h3>{t("landing:payments.title")}</h3>
        <p className="p-regular">{t("landing:payments.description")}</p>
        <Button variant="primary">{t("common:learn-more")}</Button>
      </div>
    </section>
  );
};
export default PaymentsSection;
