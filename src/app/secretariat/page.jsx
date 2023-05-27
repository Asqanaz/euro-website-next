import { MEMBERS } from "@/tempDatas/members"
import Image from "next/image"

export default function Secretariat() {
	const secretariat = MEMBERS.filter(elem => elem.secretariat)

	return (
		<section className="container">
			<div className="flex flex-col py-20">
				<h2 className="lg:text-5xl text-3xl text-secondary font-bold text-center mb-6">Secretariat</h2>
				<p className="md:text-2xl text-xl md:leading-loose leading-relaxed text-primary ">
					The IERA head office is in Yerevan but the Secretariat, composed of the Secretary General and 2
					Deputy Secretaries General, works on a remote basis, as its 3 members are based in Armenia and in 2
					European countries. The Secretariat is elected by the board for a period of 5 years with the
					following responsibilities:
				</p>
				<ul className="dashed md:text-2xl text-xl md:leading-loose leading-relaxed text-primary ml-6">
					<li>to manage the current activities of the Organization</li>
					<li>to support the Board and the President in their work</li>
					<li>to coordinate the international relations and cooperation of the Organization</li>
					<li>to review and examine the applications of candidates for membership of the Organization</li>
					<li>to administer the finances of the Organization in relation with the treasurer</li>
					<li>to prepare the meetings of the Assembly and the Board (activity reports, annual budget)</li>
				</ul>
			</div>
			<div className="gap-14 members-grid">
				{secretariat.map(elem => {
					return (
						<div className="flex flex-col gap-3" key={elem.id}>
							<Image
								src={elem.image}
								alt={elem.name}
								width="212"
								height="212"
								className="aspect-square object-contain"
							/>
							<p className="text-secondary text-2xl sm:h-[64px] lg:h-auto line-clamp-2 saf-line-clamp">{elem.name}</p>
							<p className="text-primary lg:text-xl text-lg">{elem.position}</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}
