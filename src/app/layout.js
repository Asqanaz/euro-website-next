import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import "./globals.css"
import ReCaptchaProvider from "@/providers/ReCaptchaProvider"
import ReactQueryProvider from "@/providers/ReactQueryProvider"

export const metadata = {
	title: "IERA Alliance",
	description:
		"IERA - International Education and Research Alliance based in Yerevan, Armenia, brings together education and research institutions of Western and Eastern Europe, the Transcaucasus, Central Asia and the Middle East to share know-how and best practices based on common values and for mutual benefit."
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ReCaptchaProvider>
					<Navbar />
					<ReactQueryProvider>
						<main>{children}</main>
					</ReactQueryProvider>
					<Footer />
				</ReCaptchaProvider>
			</body>
		</html>
	)
}
