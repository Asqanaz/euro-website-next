import React from "react"

export const metadata = {
    title: "Governance",
    description: "The International Education and Research Alliance (IERA) is an international non-governmental and non-profit organization according to Armenian law. The headquarters of IERA are based in Yerevanwith a European office in Geneva."
}

export default function Governance() {
	return (
		<div className="container flex flex-col my-20">
			<h2 className="lg:text-5xl text-3xl text-secondary font-bold text-center my-6">Governance</h2>
			<div className="md:text-2xl text-xl md:leading-relaxed leading-relaxed text-primary">
				<p>
					The International Education and Research Alliance (IERA) is an international non-governmental and
					non-profit organization according to Armenian law. The headquarters of IERA are based in Yerevan
					with a European office in Geneva.
				</p>
				<p className="mt-10">
					The General Assembly, the highest body of the organization is convened once a year by the Board. The
					decisions of the Assembly are taken by a simple majority of votes by all members present and are
					valid if more than half of all members of the organization participate in the Assembly.
				</p>
				<ul className="md:ml-8 dashed">
					<li>
						To confirm the President and Vice-Presidents of the Board and the termination of their powers
					</li>
					<li>
						To approve the charter of the organization, including changes and additions as well as the
						structure of the organization
					</li>
					<li>To validate the future strategic orientations of the organization proposed by the Board</li>
					<li>
						To approve any decision on reorganization of the organization such as the creation of new bodies
						within the organization
					</li>
					<li>
						To adopt any decision on the organization’s participation in another legal entity or other
						organization
					</li>
				</ul>
			</div>
		</div>
	)
}
