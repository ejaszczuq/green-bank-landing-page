import React from "react";
import "./Button.scss";

// Improved BaseProps interface for flexibility
export type BaseProps<T extends HTMLElement, Overrides = object> = Omit<React.HTMLProps<T>, keyof Overrides> &
  Overrides;

// Enhanced ButtonProps interface with children support
interface ButtonProps extends BaseProps<HTMLButtonElement, { size?: "normal" | "small" }> {
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
