import React from "react"
import { getAllPosts } from "@/lib/postsRequest"
import Link from "next/link"

export const LatestPosts = async ({ postId, postType = "news" }) => {
	const posts = await getAllPosts({
		type: postType,
	})

	let content = posts?.result.filter((p) => p.id !== postId).slice(0, 4)

	return (
		<section className="container flex flex-col gap-4 py-14 px-10">
			<div className="w-full flex justify-between items-center gap-3">
				<h3 className="text-primary text-3xl">
					Latest {postType === "news" ? postType : postType + "s"}
				</h3>
				<Link
					href="/posts/news"
					className=" text-secondary text-sm"
				>
					View all
				</Link>
			</div>
			<div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-[start stretch] gap-x-80 gap-y-10">
				{content?.map((post) => {
					return (
						<Link
							href={`/post/${post.id}}`}
							className="flex flex-col gap-8 py-8 border-t-primary border-t justify-between"
							key={post.id}
						>
							<p className="text-secondary text-2xl line-clamp-2">
								{post.title}
							</p>
							<div
								className="text-primary text-base line-clamp-2 saf-line-clamp html-text"
								dangerouslySetInnerHTML={{ __html: post.description }}
							/>
							<p className="text-primary text-sm">
								{post.type}-{post.date}
							</p>
						</Link>
					)
				})}
			</div>
		</section>
	)
}
