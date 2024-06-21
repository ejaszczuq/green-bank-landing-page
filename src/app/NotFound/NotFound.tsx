import React from "react";
import { useNavigate } from "react-router-dom";

import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return <div className="not-found">Not Found</div>;
};

export default (
  <>
    <NotFound />
  </>
);
