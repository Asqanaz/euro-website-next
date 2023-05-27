import React from "react"

export const Button = ({
  children,
  variant = "primary",
  extraStyles,
  fill = "outlined",
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`py-4 
      ${
        variant === "primary"
          ? "border-primary text-primary"
          : "border-secondary text-secondary"
      }
      bg-${variant} text-white hover:bg-button-hover hover:text-primary hover:border-transparent
      border transition-all ${extraStyles}
      flex items-center justify-center gap-x-2 group font-bold
      `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
