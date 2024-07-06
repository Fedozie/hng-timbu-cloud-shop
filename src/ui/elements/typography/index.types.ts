export const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p"
};

export type TypographyVariant = keyof typeof variantMapping;

export type TypographyAlign = 
  | "left"
  | "center"
  | "right";

export interface TypographyProps extends React.HTMLAttributes<HTMLOrSVGElement>{
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  variant?: TypographyVariant;
  align?: TypographyAlign;
  customClassName?: string;
}