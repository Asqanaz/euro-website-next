"use client"

import React, { useState } from "react"
import { FilterIcon } from "@/icons/FilterIcon"
import { Button } from "@/ui/button/Button"
import { CgClose } from "react-icons/cg"
import { FilterItems } from "./FilterItems"
import { filterItems } from "@/tempDatas/filterItems"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const Filter = () => {
	const [open, setOpen] = useState(false)
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	return (
		<div>
			<Button variant="secondary" fill="outlined" extraStyles={`px-10`} onClick={() => setOpen(open => !open)}>
				<FilterIcon width="20" className={"group-hover:fill-primary fill-white transition-all"} />
				Filter
			</Button>

			{/* filter open state */}

			<div
				className={`md:w-[537px] w-full h-screen bg-white shadow-xl fixed top-0 ${
					open ? "left-0" : "md:-left-[537px] -left-full"
				} p-10 z-10 transition-all`}
			>
				<CgClose
					className="absolute right-10 top-10 text-secondary text-2xl font-bold cursor-pointer"
					onClick={() => setOpen(false)}
				/>
				<form className="my-16 flex flex-col gap-y-4">
					<input
						type="search"
						placeholder="Search"
						className="rounded-2xl px-4 w-full h-[50px] py-2 bg-goalSection border-none outline-none"
						onKeyDown={e => {
							if (e.code === "Enter") {
								let filter = e.target.value
								const params = new URLSearchParams(searchParams)
								params.set("q", filter)
								setOpen(false)
								router.push(`${pathname}?${params.toString()}`)
							}
						}}
					/>
					<div className="space-y-4">
						{filterItems.map(filter => (
							<FilterItems
								filterType={filter.filterType}
								filterName={filter.filterName}
								inputs={filter.inputs}
								key={filter.filterType}
							/>
						))}
					</div>
				</form>
			</div>
		</div>
	)
}
