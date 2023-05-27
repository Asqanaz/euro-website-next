import Image from "next/image"
import React from "react"

export function JoinIera() {
	return (
		<section className="bg-secondary relative py-24">
			<div className="container flex xl:flex-row flex-col justify-center gap-32">
				<div className="flex-1">
					<h2 className="text-3xl font-bold my-10 text-white">How to join IERA</h2>
					<div className="lg:flex-[45%] flex-auto w-full flex flex-col ">
						<ol className="list-decimal flex flex-col gap-y-2 ml-6 lg:text-2xl text-lg">
							<li className="text-white">
								Send us a document with the following information to
								<br />
								<a
									href="mailto:secretary.general@iera-alliance.eu"
									className="text-button-hover break-words underline"
								>
									secretary.general@iera-alliance.eu
								</a>
								:
								<ul className="my-4 list-disc font-extralight">
									<li className="text-white">
										Short presentation of your institution with link to your website
									</li>
									<li className="text-white">
										Your presence in other international networks or projects
									</li>
									<li className="text-white">Your motivation to join the Alliance </li>
									<li className="text-white">Practical contact details</li>
								</ul>
							</li>
							<li className="text-white">
								After analysis of the received information we will get in touch
								<br />
								with you to finalize the application process
							</li>
						</ol>
					</div>
				</div>
				<div className="flex-1 bg-white flex flex-col items-center gap-5 py-5">
					<p className="text-secondary text-3xl">Contact Us</p>
					<Image src="/images/martin-klotz.webp" alt="Martin Klotz" width = "186" height = "186" />
					<p className="text-secondary text-3xl">Martin Klotz</p>
					<p className="text-secondary text-xl">Secretary General</p>
					<a href="mailto:secretary.general@iera-alliance.eu" className="break-words underline">
						secretary.general@iera-alliance.eu
					</a>
				</div>
			</div>
		</section>
	)
}
