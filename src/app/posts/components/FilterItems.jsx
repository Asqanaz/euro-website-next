"use client"

import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { Radio } from "@/ui/input/Radio"
import { FilterDate } from "./FilterDate"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const FilterItems = ({ filterType, filterName, inputs }) => {
	const [isOpen, setIsOpen] = useState(false)

	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const [checked, setChecked] = useState(searchParams.has("order") && searchParams.get("order"))
	
	const handleChecked = e => {
		const params = new URLSearchParams(searchParams)

		const value = e.target.value
		params.set("order", value)
		setChecked(value)

		const query = params.toString()
		console.log(query)
		const queryParam = `${pathname}?${query}`

		router.push(queryParam)
	}

	return (
		<div className={`flex flex-col border-b border-primary overflow-hidden`}>
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
				role="presentation"
			>
				<span className="text-secondary font-medium text-xl">{filterType}</span>
				<IoIosArrowDown className={`${isOpen ? "rotate-0" : "rotate-180"} transition-all`} />
			</div>
			<div className={`gap-y-4 my-4 drop ${isOpen ? "active" : ""} overflow-hidden transition-all`}>
				<div className="space-y-4">
					<div className="flex flex-col gap-y-4">
						{inputs?.map(inp => (
							<Radio
								labelName={filterName}
								value={inp.value}
								onChange={handleChecked}
								checked={checked === inp.value}
								label={inp.label}
								key = {inp.value}
							/>
						))}

						{filterType === "Date" && <FilterDate />}
					</div>
				</div>
			</div>
		</div>
	)
}
