import React from "react"
import { format } from "date-fns"
import { dateFormat } from "@/utils/dateFormat"
import { getEvent } from "@/lib/postsRequest"
import Link from "next/link"

export async function EventSection() {

	const firstEvent = await getEvent()

	return (
		<>
			{firstEvent && (
				<section className="bg-[url('/images/event-bg.webp')] bg-no-repeat bg-cover">
					<div
						className="container lg:pt-20 pt-16 lg:pb-80 pb-48"
					>
						<div className="md:w-1/2 w-full min-w-96 flex flex-col gap-6">
							<Link href = {`/posts/event/${firstEvent.id}`} className="lg:text-2xl text-xl text-secondary cursor-pointer">{firstEvent.title}</Link>
							<div
								className="line-clamp-3 sm:text-3xl text-xl sm:leading-relaxed leading-relaxed saf-line-clamp"
								dangerouslySetInnerHTML={{
									__html: firstEvent.description
								}}
							/>
							<p className="lg:text-3xl text-xl text-secondary">
								{format(dateFormat(firstEvent.startDate), "LLLL do")} and{" "}
								{format(dateFormat(firstEvent.endDate), "LLLL do yyyy")}
							</p>
						</div>
					</div>
				</section>
			)}
		</>
	)
}
