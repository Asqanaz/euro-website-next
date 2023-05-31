"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { Post } from "../components/Post"
import { Pagination } from "../components/Pagination"
import { filterBySearch } from "@/utils/filter"

export default function PostPage({ params: { postType } }) {
	const searchParams = useSearchParams()
	const [posts, setPosts] = useState(null)
	const router = useRouter()

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

	const [queriesObj, setQueriesObj] = useState({
		...Object.fromEntries(searchParams.entries()),
		type: postType,
		limit: 3,
	})

	const getAllPosts = async (queries) => {
		let queryParams = ""
		Object.entries(queries).forEach(
			([key, value]) => (queryParams += `${key}=${value}&`)
		)
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}news-events?${queryParams}`,
			{
				cache: "no-store",
			}
		)
		return res.json()
	}

	const { data, isLoading } = useQuery({
		queryKey: ["post"],
		queryFn: getAllPosts,
	})


	useEffect(() => {
		setQueriesObj({
			...queriesObj,
			...Object.fromEntries(searchParams.entries()),
		})
	}, [searchParams])

	useEffect(() => {
		getAllPosts(queriesObj)
	}, [queriesObj])

	console.log(data)
	const filteredPosts = filterBySearch(searchParams.get("q"), posts?.result)

	return (
		<div className="relative w-full min-h-[calc(100vh-207px)] pb-[120px]">
			{filteredPosts && (
				<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full">
					{filteredPosts.map((post) => (
						<Post
							post={post}
							key={post.title}
						/>
					))}
				</div>
			)}
			{filteredPosts && filteredPosts.length === 0 && (
				<h1 className="text-green-800 text-4xl">No results</h1>
			)}
			<Pagination
				count={posts?.count}
				limit={3}
			/>
		</div>
	)
}
