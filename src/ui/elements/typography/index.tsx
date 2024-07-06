import React from "react";
import { cva } from "class-variance-authority";
import { TypographyProps, variantMapping } from "./index.types";

const typography = cva("", {
  variants: {
    intent: {
      h1: "text-heading-1",
    }
  }
});

const Typography:React.FC<TypographyProps>  = (props) => {

  const {tag, variant = "p", align, children, ...rest} = props

  //Resolved Tag
  const Tag = (tag || variantMapping[variant] || "p") as keyof JSX.IntrinsicElements;

  return(
    <Tag>
      {children}
    </Tag>
  )
};

export {Typography};
export * from "./index.types";