import { Filter } from "./components/Filter"

export default function PostsLayout({ children }) {
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
