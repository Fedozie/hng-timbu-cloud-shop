export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary'
}

export type ButtonColors = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: keyof typeof ButtonVariants;
  label: string | undefined;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  customClassName?: string;
  color: ButtonColors;
  buttonType?: "button" | "submit" | "reset" | undefined;
}