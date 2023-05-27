import { PARTNERS } from "@/tempDatas/partners"
import Image from "next/image"
import React from "react"

export default function FoundingPartners() {
	return (
		<section className="py-16">
			<div className="max-w-screen-xl mx-auto px-10">
				<h2 className="text-secondary text-4xl lg:text-6xl font-semibold">Founding Partners</h2>
				<div className="flex flex-col overflow-x-auto mt-16 md:p-4 gap-20">
					{PARTNERS.map(partner => (
						<div className="flex md:flex-row flex-col-reverse gap-10 justify-between w-full md:w-auto">
							<div className="flex-[60%] flex items-center justify-center">
								<p className="lg:text-2xl text-lg md:text-left text-center">
									<a
										href={partner.link}
										className="text-secondary underline underline-offset-4"
										target="_blank"
										rel="noreferrer"
									>
										{partner.name}
									</a>{" "}
									{partner.description}
								</p>
							</div>
							<div className="flex-[40%] flex items-center justify-center">
								<Image src={partner.image} alt={partner.name} width = "550" height = "300" className="object-cover"/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
