import { MEMBERS } from "@/tempDatas/members"
import Image from "next/image"

export default function Secretariat() {
	const secretariat = MEMBERS.filter((elem) => elem.secretariat)

	return (
		<section className="container">
			<div className="flex flex-col py-20">
				<h2 className="mb-6 text-center text-3xl font-bold text-secondary lg:text-5xl">
					Secretariat
				</h2>
				<p className="text-xl leading-relaxed text-primary md:text-2xl md:leading-loose ">
					The IERA head office is in Yerevan but the Secretariat,
					composed of the Secretary General and 2 Deputy Secretaries
					General, works on a remote basis, as its 3 members are based
					in Armenia and in 2 European countries. The Secretariat is
					elected by the board for a period of 5 years with the
					following responsibilities:
				</p>
				<ul className="dashed ml-6 text-xl leading-relaxed text-primary md:text-2xl md:leading-loose">
					<li>
						to manage the current activities of the Organization
					</li>
					<li>
						to support the Board and the President in their work
					</li>
					<li>
						to coordinate the international relations and
						cooperation of the Organization
					</li>
					<li>
						to review and examine the applications of candidates for
						membership of the Organization
					</li>
					<li>
						to administer the finances of the Organization in
						relation with the treasurer
					</li>
					<li>
						to prepare the meetings of the Assembly and the Board
						(activity reports, annual budget)
					</li>
				</ul>
			</div>
			<div className="members-grid gap-14">
				{secretariat.map((elem) => {
					return (
						<div className="flex flex-col gap-3" key={elem.id}>
							<Image
								src={elem.image}
								alt={elem.name}
								width="212"
								height="212"
								className="aspect-square object-contain"
							/>
							<p className="saf-line-clamp line-clamp-2 text-2xl text-secondary sm:h-[64px] lg:h-auto">
								{elem.name}
							</p>
							<p className="text-lg text-primary lg:text-xl">
								{elem.position}
							</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}
