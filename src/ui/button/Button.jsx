import React from "react"
import { twMerge } from "tailwind-merge"

export const Button = ({
	children,
	variant = "primary",
	extraStyles,
	fill = "outlined",
	onClick,
	type,
	disabled
}) => {
	return (
		<button
			disabled={disabled}
			className={twMerge(
				`py-4 
      ${
			variant === "primary"
				? "border-primary text-primary"
				: "border-secondary text-secondary"
		}
      bg-${variant} group flex items-center justify-center
      gap-x-2 border
      font-bold text-white transition-all hover:border-transparent hover:bg-button-hover hover:text-primary
      `,
				extraStyles
			)}  
			onClick={onClick}
			type={type}>
			{children}
		</button>
	)
}
