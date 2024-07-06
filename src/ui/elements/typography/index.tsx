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
  },
  compoundVariants: [],
});

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    tag,
    variant = "p",
    align,
    customClassName = "",
    children,
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
        className,
      })}
    >
      {children}
    </Tag>
  );
};

export { Typography };
export * from "./index.types";
