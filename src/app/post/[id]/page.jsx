import { format } from "date-fns"
import { LatestPosts } from "./components/LatestPosts"
import { dateFormat } from "@/utils/dateFormat"
import { getPost } from "@/lib/postsRequest"
import Image from "next/image"

export default async function SingleNews({ params: { id } }) {
	const type = "news"
	const postData = await getPost(id)

	const post = await postData

	console.log(post)


	return (
		<div>
			<section className="py-14 border-b-[0.5px] border-b-primary border-b-solid">
				<div className="container flex flex-col md:flex-row justify-between gap-8">
					<div className="flex-1 flex flex-col justify-between gap-10">
						<div>
							<h4 className="text-primary text-3xl xl:text-5xl font-bold">
								{post.title}
							</h4>
							<h2 className="text-secondary text-2xl lg:text-4xl my-5 font-extralight">
								{type === "news"
									? format(dateFormat(post.date), "LLLL do yyyy")
									: `${format(
											dateFormat(post.startDate),
											"LLLL do"
									  )} and ${format(dateFormat(post.endDate), "LLLL do yyyy")}`}
							</h2>
						</div>
						{type === "event" && (
							<div>
								<p className="text-secondary text-lg xl:text-xl">
									News - {format(dateFormat(post.date), "LLLL do yyyy")}
								</p>
							</div>
						)}
					</div>
					<div className="flex-1">
						<Image
							src={post.img}
							alt={post.title}
                            width = "700"
                            height = "300"
                            className="object-cover"
						/>
					</div>
				</div>
			</section>
			<section className="container flex items-center justify-center my-20">
				<div
					className="max-w-5xl text-2xl leading-relaxed html-text"
					dangerouslySetInnerHTML={{ __html: post.description }}
				/>
			</section>
			<LatestPosts
				postId={post.id}
				postType={post.type}
			/>
		</div>
	)
}

