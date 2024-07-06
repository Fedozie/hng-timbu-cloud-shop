import React from "react";
import { ButtonProps } from "./index.types";
import { cva } from "class-variance-authority";
import clsx from "clsx";


const button = cva("", {
  variants: {
    variant: {
      primary: "bg-primary-500 border-0 px-4 rounded-lg",
      secondary: "bg-transparent border-0 px-4"
    },
    color: {
      primary: "text-white",
      secondary: "text-black"
    }
  },
  compoundVariants: []
})

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

  const className = clsx("flex justify-content items-center py-[0.75rem] text-center cursor-pointer",)

  return(
    <button
      type = {buttonType}
      className={button({
        className,
        variant,
        color
      })}
      {...rest}
    >
      {leftIcon && <span >{leftIcon}</span>}
      {label}
      {rightIcon && <span >{rightIcon}</span>}
    </button>
  )

};

export { Button };
export * from "./index.types";