"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

export const Pagination = ({ count, page, setPage, limit }) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const params = new URLSearchParams(searchParams)

	const pageCount = Array.from({ length: Math.ceil(count / limit) }, (v, k) => k + 1)

	const next = () => {
		if (page !== pageCount[pageCount.length - 1]) {
			setPage(p => p + 1)
			params.set("page", page)
		}
	}

	const previous = () => {
		if (page !== pageCount[0]) {
			setPage(p => page - 1)
			params.set("page", page)
		}
	}

	return (
		<div className="absolute bottom-0 flex flex-row justify-between gap-4 w-full">
			<button onClick={previous}>
				<MdKeyboardArrowLeft size="25" />
			</button>
			<div className="flex flex-row gap-4">
				{pageCount.map((pg, index) => (
					<button
						key={index + 1}
						className={`w-[46px] h-[46px] rounded-xl ${
							page === pg ? "bg-secondary text-white" : "bg-white text-secondary"
						}  text-primary`}
						onClick={() => {
							params.set("page", pg)
							// setPage(pg)
						}}
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
