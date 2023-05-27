import React from "react"
import { OurMission } from "./components/OurMission"
import { OurGoals } from "./components/OurGoals"
import { OurValues } from "./components/OurValues"

export const metadata  = {
    title: "Who We Are",
}

export default function WhoWeAre() {

	return (
		<div className="container">
			<OurMission />
			<OurGoals />
			<OurValues />
		</div>
	)
}
