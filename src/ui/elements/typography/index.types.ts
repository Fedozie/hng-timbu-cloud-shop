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

export type TypographyColors = "white" | "black" | "primary-50" | "primary-100" | "primary-200" | "primary-300" | "primary-400" | "primary-500" | "primary-600" | "primary-700" | "primary-800" | "primary-900";

export type TypographyFontWeight =
  | "thin"
  | "extra-light"
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

export interface TypographyProps extends React.HTMLAttributes<HTMLOrSVGElement>{
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  variant?: TypographyVariant;
  align?: TypographyAlign;
  color?: TypographyColors;
  customClassName?: string;
  fontWeight?: TypographyFontWeight;
}