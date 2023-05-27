"use client"

import React from "react"

export const Radio = ({ label, labelName, value, checked, onChange }) => {
	return (
		<label className="flex gap-x-4 items-center cursor-pointer">
			<input
				type="radio"
				className="hidden"
				name={labelName}
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<div
				className={`w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 ${
					checked ? "border-secondary" : "border-primary"
				}`}
			>
				{checked && <div className="w-[10px] h-[10px] rounded-full bg-secondary"></div>}
			</div>
			<span>{label}</span>
		</label>
	)
}
