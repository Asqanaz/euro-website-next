"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

export const Pagination = ({ count, limit }) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const [page, setPage] = useState(searchParams.get("page") || 1)

	const params = new URLSearchParams(searchParams)

	const pageCount = Array.from(
		{ length: Math.ceil(count / limit) },
		(v, k) => k + 1
	)

	const next = () => {
		if (page !== pageCount[pageCount.length - 1]) {
			console.log("next")
			setPage((p) => +p + 1)
			params.set("page", +page + 1)
			router.push(`${pathname}?${params.toString()}`)
		}
	}

	const previous = () => {
		if (page !== pageCount[0]) {
			console.log("prev")

			setPage((p) => +p - 1)
			params.set("page", +page - 1)
			router.push(`${pathname}?${params.toString()}`)
		}
	}


	const handlePageSelect = (p) => {
		setPage(p)
		params.set("page", p)
		router.push(`${pathname}?${params.toString()}`)
	}

	return (
		<div className="absolute bottom-0 flex flex-row justify-between gap-4 w-full">
			<button onClick={previous}>
				<MdKeyboardArrowLeft size="25" />
			</button>
			<div className="flex flex-row gap-4">
				{pageCount.map((pg, index) => (
					<button
						key={index}
						className={`w-[46px] h-[46px] rounded-xl ${
							String(page) === String(pg)
								? "bg-secondary text-white"
								: "bg-white text-secondary"
						}  text-primary`}
						onClick={() => handlePageSelect(pg)}
					>
						{pg}
					</button>
				))}
			</div>
			<button onClick={next}>
				<MdKeyboardArrowRight size="25" />
			</button>
		</div>
	)
}
