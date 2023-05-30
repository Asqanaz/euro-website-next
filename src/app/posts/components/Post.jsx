import { format } from "date-fns"
import React from "react"
import { dateFormat } from "@/utils/dateFormat"
import Link from "next/link"
import Image from "next/image"

export const Post = ({ post }) => {
	return (
		<Link
			className="flex flex-col bg-input border-r overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-all"
			key={post.title}
			href={`/post/${post.id}`}
		>
			<Image
				src={post.img}
				alt={post.title}
				width="500"
				height="300"
				className="aspect-[3/2] object-cover"
			/>
			<div className="lg:p-6 p-4">
				<p className="text-sm text-primary sm:h-[56px] line-clamp-3 saf-line-clamp">
					{post.title} <br />
				</p>
				<p className="text-secondary mt-4">
					{post.endDate && post.startDate
						? `${format(dateFormat(post.startDate), "LLLL do")} and ${format(
								dateFormat(post.endDate),
								"LLLL do yyyy"
						  )}`
						: `${format(dateFormat(post.date), "LLLL do yyyy")}`}
				</p>
			</div>
		</Link>
	)
}
