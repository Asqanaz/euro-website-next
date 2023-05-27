import { MEMBERS } from "@/tempDatas/members"
import Image from "next/image"
import React from "react"

export default function BoardMembers() {
	const board = MEMBERS.filter(elem => !elem.secretariat)

	return (
		<div className="container flex flex-col gap-10 my-20">
			<h2 className="lg:text-5xl text-3xl font-bold text-secondary text-center">Board</h2>
			<p className="md:text-2xl text-xl md:leading-relaxed leading-relaxed text-primary">
				The IERA board consists of 9 members, including the president, three vice-presidents (professional
				education, applied research, online education) and 5 IERA members organizations. The president and the
				three vice-presidents of the board are nominated by the IERA founder organizations, candidacies of the
				other members of the board are approved by the Assembly. The board is nominated for 5 years with the
				following responsibilities:
			</p>
			<ul className="list-disc ml-5 md:text-2xl text-xl md:leading-relaxed leading-relaxed text-primary">
				<li>to take all decisions concerning the strategy of the organization</li>
				<li>
					to confirm the integration of new members in the organization or the termination of membership of
					existing members
				</li>
				<li>to fix the amount of annual membership fees of the organization</li>
				<li>
					to elect the Secretary General and the two deputy secretaries general (one of the deputy secretaries
					general is acting as treasurer) on the recommendation of the president of the organization
				</li>
				<li>to approve the annual report and budget of the organization</li>
				<li>
					to adopt decisions on creating separate units or institutions of the organization and approving
					their charters
				</li>
				<li>to discuss decisions appealed or initiatives brought up by members of the organization</li>
				<li>to adopt decisions on the liquidation of the organization</li>
			</ul>
			<div className="gap-14 members-grid">
				{board.map(b => {
					return (
						<div className="flex flex-col gap-3" key={b.id}>
							<Image src={b.image} alt={b.name} width = "212" height = "212" className="aspect-square object-contain" />
							<p className="text-secondary text-2xl">{b.name}</p>
							<p className="text-primary text-xl">{b.position}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
