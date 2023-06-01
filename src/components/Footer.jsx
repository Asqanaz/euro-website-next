import React from "react"
import { FaFacebookF, FaLinkedinIn, FaRegCopyright } from "react-icons/fa"
import { BsYoutube, BsTwitter } from "react-icons/bs"
import Link from "next/link"
import { NewsLetterForm } from "./NewsLetterForm"
import Image from "next/image"

export default function Footer() {
	return (
		<footer>
			<div className="container mt-20 flex flex-col">
				<div className="footer-grid grid-col mx-auhref w-full  max-w-6xl justify-between gap-10 lg:gap-20">
					<div className="footer-grid-col grid grid-flow-col gap-y-4 text-sm lg:grid-flow-row lg:text-base">
						<Image
							src="/images/eu-logo.svg"
							alt="IERA Alliance"
							className="aspect-square object-contain"
							width="75"
							height="75"
						/>
						<div className="flex flex-col gap-2">
							<h4 className="text-lg text-secondary xl:text-xl">
								Stay Tuned
							</h4>
							<NewsLetterForm />
							<p className="text-[10px] lg:text-sm">
								By subscribing you agree with the{" "}
								<span className="text-secondary underline underline-offset-1">
									privicy policy
								</span>
							</p>
						</div>
					</div>
					<ul className="footer-grid-col flex flex-col items-start gap-y-4 text-sm lg:pt-20 lg:text-base ">
						<li className="font-bold text-secondary">
							Quick Links
						</li>
						<li>
							<Link href="/activities-and-projects">
								Our Actions
							</Link>
						</li>
						<li>
							<Link href="/partners">Founding Partners</Link>{" "}
						</li>
						<li>
							<Link href="/news-and-events/news">News</Link>
						</li>
						<li>
							<Link href="/news-and-events/event">Events</Link>
						</li>
					</ul>
					<ul className="footer-grid-col flex flex-col items-start justify-end gap-y-4 text-sm lg:pt-20 lg:text-base">
						<li>
							<Link href="activities-and-projects">
								Our Projects
							</Link>
						</li>
						<li>
							<Link href="/who-we-are">Secretariat</Link>
						</li>
						<li>
							<Link href="/contact-us">Contact us</Link>
						</li>
					</ul>
					<div className="footer-grid-col flex flex-col items-start gap-y-4 lg:pt-20">
						<h4 className="text-sm font-bold text-secondary xl:text-base">
							Follow us
						</h4>
						<div className="flex items-center gap-x-4">
							<FaFacebookF
								size="26"
								className="cursor-pointer text-[#464646] transition-all hover:text-secondary"
							/>
							<BsTwitter
								size="26"
								className="cursor-pointer text-[#464646] transition-all hover:text-secondary"
							/>
							<FaLinkedinIn
								size="26"
								className="cursor-pointer text-[#464646] transition-all hover:text-secondary"
							/>
							<BsYoutube
								size="26"
								className="cursor-pointer text-[#464646] transition-all hover:text-secondary"
							/>
						</div>
					</div>
				</div>
				<div className="mb-4 mt-20 h-[1px] w-full bg-[#9F9F9F]"></div>
				<div className="mb-3">
					<span className="flex items-center font-extralight">
						<FaRegCopyright className="mr-2 text-primary" />
						2023 IERA. All right reserved.
					</span>
					<p className="font-extralight">
						Design & development by{" "}
						<a
							href="https://www.facebook.com/Glteducenter"
							className="cursor-pointer font-bold text-secondary"
							target="_blank"
							rel="noreferrer">
							Global IT LLC 2023
						</a>
					</p>
				</div>
			</div>
		</footer>
	)
}
