import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { TypographyProps, variantMapping } from "./index.types";

const typography = cva("", {
  variants: {
    intent: {
      h1: "text-heading-1",
      h2: "text-heading-2",
      h3: "text-heading-3",
      h4: "text-heading-4",
      h5: "text-heading-5",
      h6: "text-heading-6",
      p: "text-paragraph",
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
    color: {
      white: "text-white",
      black: "text-black",
      "primary-50": "text-primary-50",
      "primary-100": "text-primary-100",
      "primary-200": "text-primary-200",
      "primary-300": "text-primary-300",
      "primary-400": "text-primary-400",
      "primary-500": "text-primary-500",
      "primary-600": "text-primary-600",
      "primary-700": "text-primary-700",
      "primary-800": "text-primary-800",
      "primary-900": "text-primary-900",
    },
    fontWeight: {
      thin: "font-thin",
      "extra-light": "font-extra-light",
      light: "font-light",
      regular: "font-regular",
      medium: "font-medium",
      "semi-bold": "font-semi-bold",
      bold: "font-bold",
      "extra-bold": "font-extra-bold",
      black: "font-black",
    },
  },
  compoundVariants: [],
});

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    tag,
    variant = "p",
    align,
    color = "black",
    customClassName = "",
    children,
    fontWeight,
    ...rest
  } = props;

  //Resolved Tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  const className = clsx(customClassName);

  return (
    <Tag
      className={typography({
        intent: variant,
        align,
        color,
        fontWeight,
        className,
      })}
      
    >
      {children}
    </Tag>
  );
};

export { Typography };
export * from "./index.types";
