import React from "react";

import { BaseProps } from "@src/types/BaseProps.types";

import "./Button.scss";

// Enhanced ButtonProps interface with children support
interface ButtonProps extends BaseProps<HTMLButtonElement, "size"> {
  size?: "normal" | "small";
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "underlined";
  children?: React.ReactNode; // Allow for children (text or elements)
  loading?: boolean;
  uppercase?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

// Button component with children handling
const Button = ({
  type = "button",
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button type={type} disabled={disabled || loading} className={`${className} ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
