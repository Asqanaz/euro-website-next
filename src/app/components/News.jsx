import React from "react"
import { Button } from "@/ui/button/Button"
import { useMatchMedia } from "@/hooks/useMatchMedia"
import { useRouter } from "next/navigation"
import { getNews } from "@/lib/postsRequest"
import Image from "next/image"

export async function News() {
    const news = await getNews()

	return (
		<section className="bg-newsBg bg-cover bg-no-repeat">
			<div className="container py-14">
				<div className="flex flex-col gap-3 border-b-secondary border-b-2">
					<h2 className="text-3xl font-bold text-secondary">IERA News</h2>
					<p className="lg:text-xl text-lg text-primary">What’s new</p>
					<p className="lg:text-2xl text-xl text-secondary mt-8">Latest news</p>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10">
					{news.map(news => {
						return (
							<div className="flex flex-col justify-start md:items-start items-center" key={news.id}>
								<Image src={news.img} alt={news.title} width = "500" height = "300" className="object-cover aspect-[3/2]" />
								<div>
									<h3 className="text-secondary my-4 text-xl line-clamp-2 md:h-[56px] text-ellipsis">{news.title}</h3>
								</div>
								<div className="flex justify-between flex-col h-full">
									<div
										className="line-clamp-[15] saf-line-clamp text-lg text-primary"
										dangerouslySetInnerHTML={{
											__html:
												news.description
										}}
									/>
									<Button
										variant="secondary"
										extraStyles="px-6 sm:max-w-[140px] w-full mt-10"
										// onClick={() => 
										// 	navigate(`/news-and-events/${news.type}/${news.id}`)
										// }
									>
										Learn more
									</Button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
