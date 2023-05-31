"use client"
import { Filter } from "./components/Filter"
import { usePathname } from "next/navigation"
import { useSelectedLayoutSegments } from "next/navigation"

export default function PostsLayout({ children }) {
	const specificPage = useSelectedLayoutSegments()

	const checkIfNotSpecificPage = !!Number(specificPage[specificPage.length - 1])

	if (checkIfNotSpecificPage) return <>{children}</>

	return (
		<section className="my-20">
			<div className="container flex md:flex-row flex-col gap-20">
				<aside className="w-40">
					<Filter />
				</aside>
				<div className="relative w-full min-h-[calc(100vh-207px)] pb-[120px]">
					{children}
				</div>
			</div>
		</section>
	)
}
