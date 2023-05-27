"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/ui/button/Button"
import { BurgerMenu } from "@/components/BurgerMenu"
import { useMatchMedia } from "@/hooks/useMatchMedia"
import { useRouter } from "next/navigation"
import { SubMenu } from "@/components/SubMenu"
import Link from "next/link"
import Image from "next/image"

function Navbar() {
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		const navbar = document.querySelector("nav")

		const handleScroll = window.addEventListener("scroll", () => {
			if (window.scrollY) {
				navbar.style.backgroundColor = "white"
			} else {
				navbar.style.backgroundColor = "transparent"
			}
		})

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		if (checked) document.body.classList.add("menu-open")
		else document.body.classList.remove("menu-open")
	}, [checked])

	const { is1024, is768 } = useMatchMedia()

	const router = useRouter()

	const [fullHeight, setFullHeight] = useState()

	useEffect(() => {
		setFullHeight(window.innerHeight - 102)
	}, [])

	return (
		<nav className="sticky top-0 left-0 py-4 z-10 shadow-xl transition-all">
			<div className="container flex items-center justify-between relative">
				<Link href={"/"} onClick={() => setChecked(false)}>
					<Image src="/images/eu-logo.svg" width="55" height="55" alt="IERA Alliance" />
				</Link>
				<div className="lg:flex items-center gap-8 hidden">
					<ul className="flex gap-x-10 font-bold text-lg">
						<SubMenu title="Who We Are">
							<li>
								<Link href="/who-we-are">Our Mission</Link>
							</li>
							<li>
								<Link href="/governance">Governance</Link>
							</li>
							<li>
								<Link href="/board-members">Board</Link>
							</li>
							<li>
								<Link href="/secretariat">Secretariat</Link>
							</li>
						</SubMenu>

						<SubMenu title="Our members">
							<li>
								<Link href="/founding-partners">Founding Partners</Link>
							</li>
							<li>
								<Link href="/our-members">Our members</Link>
							</li>
							<li>
								<Link href="/candidates-for-membership">Candidates for membership</Link>
							</li>
						</SubMenu>
						<li>
							<Link href="/activities-and-projects">Activities and projects</Link>
						</li>
						<li>
							<Link href="/posts/event">Events</Link>
						</li>
						<li>
							<Link href="/posts/news">News</Link>
						</li>
					</ul>
				</div>
				<div className="flex items-center space-x-6">
					<Button
						onClick={() => {
							router.push("/join-us")
						}}
						variant="secondary"
						extraStyles="md:block hidden px-10 hidden"
						fill="contained"
					>
						Join Us
					</Button>
					<BurgerMenu setChecked={setChecked} checked={checked} />
				</div>
			</div>

			{/* Mobile Navbar */}

			<div
				className={`${
					checked ? "top-full opacity-100 pointer-events-auto" : "-top-[350%] opacity-0 pointer-events-none"
				} bg-white absolute w-full transition-all lg:hidden block`}
				style={{ height: fullHeight + "px" }}
			>
				<div className={`px-4 pb-6 pt-8 flex flex-col overflow-y-scroll md:py-10 nav h-full`}>
					<ul className="flex flex-col gap-10 lg:text-3xl text-2xl text-primary font-bold">
						<li className="border-b border-b-primary pb-4">
							Who We Are
							<ul className="flex flex-col md:gap-y-8 gap-y-4 lg:text-2xl text-lg mt-4 font-normal">
								<li>
									<Link href="/who-we-are" onClick={() => setChecked(false)}>
										Our Mission
									</Link>
								</li>
								<li>
									<Link href="/governance" onClick={() => setChecked(false)}>
										Governance
									</Link>
								</li>
								<li>
									<Link href="/board-members" onClick={() => setChecked(false)}>
										Board
									</Link>
								</li>
								<li>
									<Link href="/secretariat" onClick={() => setChecked(false)}>
										Secretariat
									</Link>
								</li>
							</ul>
						</li>
						<li className="border-b border-b-primary pb-4">
							Our Members
							<ul className="flex flex-col md:gap-y-8 gap-y-4 lg:text-2xl text-lg mt-4 font-normal">
								<li>
									<Link href="/founding-partners" onClick={() => setChecked(false)}>
										Founding Partners
									</Link>
								</li>
								<li>
									<Link href="/our-members" onClick={() => setChecked(false)}>
										Our members
									</Link>
								</li>
								<li>
									<Link href="/candidates-of-membership" onClick={() => setChecked(false)}>
										Candidates of Membrship
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link
								className="border-b border-b-primary pb-4"
								href="/activities-and-projects"
								onClick={() => setChecked(false)}
							>
								Activities and Projects
							</Link>
						</li>
						<li>
							<Link
								className="border-b border-b-primary pb-4"
								href="/news-and-events/event"
								onClick={() => setChecked(false)}
							>
								Events
							</Link>
						</li>
						<li>
							<Link
								className="border-b border-b-primary pb-4"
								href="/news-and-events/news"
								onClick={() => setChecked(false)}
							>
								News
							</Link>
						</li>
					</ul>
					{!is768 && (
						<Button
							onClick={() => {
								router.push("/join-us")
								setChecked(false)
							}}
							variant="secondary"
							fill="contained"
							extraStyles={"w-2/3 mt-10"}
						>
							Join Us
						</Button>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
