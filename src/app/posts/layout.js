import { Filter } from "./components/Filter"

export default function PostsLayout({ children }) {

	return (
		<section className="my-20">
			<div className="container flex md:flex-row flex-col gap-20">
				<aside className="w-40">
					<Filter />
				</aside>
				<div className="relative w-full min-h-[calc(100vh-207px)] pb-[120px]">
					{/* {!filteredPosts?.length && !isLoading ? (
							<h4 className="text-3xl font-bold">No results</h4>
						) : (
							<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full">
								{filteredPosts?.map(post => (
									<Post post={post} key={post.title} />
								))}
							</div>
						)}
						{isLoading && <Loader />}
						<Pagination count={quantity} page={page} setPage={setPage} limit={limit} /> */}
                        {children}
				</div>
			</div>
		</section>
	)
}
