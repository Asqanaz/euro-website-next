import React from "react"
import { Button } from "@/ui/button/Button"

export const AboutIERA = () => {
	return (
		<section className="py-20 relative bg-[url('/images/about-bg.webp')] bg-cover">
			<div className="container">
				<div className="max-w-3xl">
					<h2 className="text-3xl font-bold text-secondary">About IERA</h2>
					<p className="text-2xl my-10 md:text-left whitespace-pre-wrap">
						<span className="text-secondary">IERA</span> - International Education and Research Alliance
						brings together education and research institutions of Western and Eastern Europe, the
						Transcaucasus, Central Asia and the Middle East to share know-how and best practices based on
						common values and for mutual benefit.
					</p>
					<Button extraStyles={"px-4 md:w-auto w-full"} variant="secondary" fill="contained">
						Learn More
					</Button>
				</div>
			</div>
		</section>
	)
}
