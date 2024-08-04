import React from "react";
import { useCollapse } from "react-collapsed";

import { listItems } from "@constants/listItems";

import classNames from "classnames";

import "./FAQsSection.scss";

interface ICollapsibleItem {
  question: string;
  answer: string;
  defaultExpanded?: boolean;
}

const CollapsibleItem = ({ question, answer, defaultExpanded }: ICollapsibleItem) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    easing: "cubic-bezier(0.69, -0.23, 0.31, 1.23)",
    duration: 500,
    defaultExpanded
  });

  const collapseBtnClasses = classNames("collapse-btn", {
    "collapse-btn--expanded": isExpanded
  });

  return (
    <div className="item">
      <div role="button" className="question-box" {...getToggleProps()}>
        <h5 className="title">{question}</h5>
        <button className={collapseBtnClasses}>
          <img src="icons/+.png" alt="+ icon" />
        </button>
      </div>

      <div className="collapsible-list-content" {...getCollapseProps()}>
        <p className="p-regular">{answer}</p>
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
