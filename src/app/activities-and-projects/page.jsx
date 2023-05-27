import Image from "next/image"
import React from "react"

export default function ActivitiesAndProjects() {
	return (
		<div className="container flex lg:flex-row flex-col gap-20 my-20">
			<div className="flex-1 flex flex-col gap-y-8">
				<h2 className="text-4xl text-secondary font-bold">Our Actions</h2>
				<p className="text-2xl font-bold">
					In order to achieve its goals, the Alliance carries out the following actions:
				</p>
				<ul className="list-disc md:text-2xl md:leading-relaxed text-xl ml-6 leading-relaxed space-y-2">
					<li>Outgoing and incoming student and staff mobility (long and short, virtual);</li>
					<li>​Internship mobility;​</li>
					<li>
						Access to a common catalogue of specialization programs leading to professional certificates;​
					</li>
					<li>Access to online study programs; ​</li>
					<li>Implementation of common research projects;​</li>
					<li>
						Organization of formal and informal networking activities, educational events, conferences and
						seminars;​
					</li>
					<li>Participation in support programs of local and international funds;​</li>
					<li>Developing common education programs such as:​</li>
					<li>Tailor-made staff training programs to exchange knowledge and expertise;​</li>
					<li>Organization of joint summer and winter school programs.​</li>
				</ul>
			</div>
			<div className="flex-1 flex items-center justify-center">
				<Image src="/images/our-actions.png" alt="Our Actions" width = "500" height = "300" className="object-cover"/>
			</div>
		</div>
	)
}
