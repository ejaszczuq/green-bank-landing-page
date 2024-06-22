import React from "react";

import "./Button.scss";

interface IGreenButton {
  variant: "primary" | "secondary" | "underlined";
  btnName: string;
}

const Button = ({ variant, btnName }: IGreenButton) => {
  return <button className={variant}>{btnName}</button>;
};

export default Button;
