'use client'

import React from "react"
import "./burger.css"

export const BurgerMenu = ({ checked, setChecked }) => {
	return (
			<label htmlFor="check" className="burgerBtn lg:hidden flex">
				<input type="checkbox" id="check" checked = {checked} onChange={() => setChecked(check => !check)} />
				<span></span>
				<span></span>
				<span></span>
			</label>
	)
}
