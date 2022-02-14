import React, { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "link";
}

const Button: FC<ButtonProps> = (props) => {
  const { children, variant, className } = props;

  return (
    <button
      {...props}
      className={classNames("btn", className, {
        "btn-primary": variant === "primary",
        "btn-link": variant === "link",
      })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
    variant: "primary",
};

export default Button;
