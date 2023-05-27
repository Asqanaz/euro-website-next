"use client"

import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

export const SubMenu = ({ children, title }) => {
	const [isOpen, setIsOpen] = useState(false)

	const menuRef = useRef()

	const documentClick = e => {
		if (menuRef && !menuRef.current.contains(e.target)) setIsOpen(false)
	}

	useEffect(() => {
		document.addEventListener("click", documentClick)

		return () => document.removeEventListener("click", documentClick)
	})

	return (
		<li
			className={`relative cursor-pointer text-lg ${
				isOpen ? "text-secondary" : "text-primary"
			} flex items-center`}
			onClick={() => setIsOpen(!isOpen)}
			role="presentation"
			ref={menuRef}
		>
			{title}
			<IoIosArrowDown className={`ml-1 mt-1 ${isOpen ? "rotate-180" : "rotate-0"} transition-all`} />
			<ul
				className={`${
					isOpen ? "block" : "hidden"
				} absolute top-full p-4 bg-white space-y-4 text-base w-[150px]`}
			>
				{children}
			</ul>
		</li>
	)
}
