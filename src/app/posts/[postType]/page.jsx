"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { Post } from "../components/Post"
import { Pagination } from "../components/Pagination"
import { filterBySearch } from "@/utils/filter"
import { Loader } from "@/ui/loader/Loader"

export default function PostPage({ params: { postType } }) {
	const searchParams = useSearchParams()
	const [posts, setPosts] = useState(null)
	const router = useRouter()

	const [queriesObj, setQueriesObj] = useState({
		...Object.fromEntries(searchParams.entries()),
		type: postType,
		limit: 3
	})

	const pathname = usePathname()
	useEffect(() => {
		const params = new URLSearchParams(searchParams)
		if (!searchParams.has("page")) {
			params.set("page", 1)
		}

		if (!searchParams.has("order")) {
			params.set("order", "DESC")
		}

		router.push(`${pathname}?${params.toString()}`)
	})

	console.log(queriesObj)

	const getAllPosts = async () => {
		let queryParams = ""
		Object.entries(queriesObj).forEach(
			([key, value]) => (queryParams += `${key}=${value}&`)
		)
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}news-events?${queryParams}`
		)
		return await res.json()
	}

	const { data, isLoading } = useQuery(["posts", queriesObj], getAllPosts)

	useEffect(() => {
		setQueriesObj({
			...queriesObj,
			...Object.fromEntries(searchParams.entries())
		})
	}, [searchParams])

	const filteredPosts = filterBySearch(searchParams.get("q"), data?.result)

	return (
		<div className="relative min-h-[calc(100vh-207px)] w-full pb-[120px]">
			<div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
				{filteredPosts?.map((post) => (
					<Post post={post} key={post.title} />
				))}
			</div>
			{filteredPosts && filteredPosts.length === 0 && (
				<h1 className="text-4xl text-green-800">No results</h1>
			)}

			{isLoading && <Loader />}
			<Pagination count={data?.count} limit={3} />
		</div>
	)
}
