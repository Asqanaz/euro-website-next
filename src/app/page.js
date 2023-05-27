import React from "react"
import { News } from "./components/News"
import { JoinIera } from "./components/JoinIera"
import { AboutIERA } from "./components/AboutIERA"
import { EventSection } from "./components/EventSection"

function Home() {
	return (
		<>
			<AboutIERA />
			<News />
			<EventSection />
			<JoinIera />
		</>
	)
}

export default Home
