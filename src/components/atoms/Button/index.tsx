import React from "react";
import styles from './button.module.css'

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: (e?:any) => void;
}
// console.log(styles)
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const isPrimary = primary ? 'primary' : 'default'
  const baseButton = "rounded-full font-bold";
  return (
  
    <button
      type="button"
      className={`${styles[isPrimary]} ${baseButton} ${styles[size]}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
