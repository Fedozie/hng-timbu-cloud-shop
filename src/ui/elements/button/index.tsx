import React from "react";
import { ButtonProps } from "./index.types";
import { cva } from "class-variance-authority";
import clsx from "clsx";

// Define button styles with cva
const button = cva("flex justify-center items-center py-[0.75rem] text-center cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-primary-500 border-0 px-4 rounded-lg hover:bg-primary-200",
      secondary: "bg-transparent border-0 px-4",
      disabled: "bg-primary-300 border-0 px-4 rounded-lg"
    },
    color: {
      primary: "text-white",
      secondary: "text-black"
    }
  },
  compoundVariants: []
});

// Button component
const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant,
    color = "primary",
    label = "",
    rightIcon,
    leftIcon,
    customClassName,
    buttonType,
    ...rest
  } = props;

  // Combine base styles with custom styles
  const className = clsx(
    button({
      variant,
      color
    }),
    customClassName
  );

  return (
    <button
      type={buttonType}
      className={className}
      {...rest}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {label}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
export * from "./index.types";
