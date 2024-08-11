import React from "react";
import { useCollapse } from "react-collapsed";

import { listItems } from "@constants/listItems";

import classNames from "classnames";

import "./FAQsSection.scss";
import { useTranslation } from "react-i18next";

interface ICollapsibleItem {
  question: string;
  answer: string;
  defaultExpanded?: boolean;
}

const CollapsibleItem = ({ question, answer, defaultExpanded }: ICollapsibleItem) => {
  const { t } = useTranslation(["faqs"]);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    easing: "cubic-bezier(0.1, -1.4, 0.3, 1.3)",
    duration: 500,
    defaultExpanded,
    collapsedHeight: 5
  });

  const collapseBtnClasses = classNames("collapse-btn", {
    "collapse-btn--expanded": isExpanded
  });

  return (
    <div className="item">
      <div role="button" className="question-box" {...getToggleProps()}>
        <h5 className="title">{t(question as any)}</h5>
        <button className={collapseBtnClasses}>
          <span className="line horizontal-line" />
          <span className="line vartical-line" />
          {/* {collapseBtnClasses.includes('--expanded') ? <img src="icons/-.png" alt="collapse-icon" /> : <img src="icons/+.png" alt="expand-icon" />} */}
        </button>
      </div>

      <div className="collapsible-list-content" {...getCollapseProps()}>
        <p className="p-regular">{t(answer as any)}</p>
      </div>
    </div>
  );
};

const FAQsSection = () => {
  return (
    <section className="FAQs-section" id="faqs">
      <center>
        <h3 className="heading">FAQs</h3>
      </center>
      <div className="items-container">
        {listItems.map((item, index) => (
          <CollapsibleItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;
