import React from "react"
import { FaFacebookF, FaLinkedinIn, FaRegCopyright } from "react-icons/fa"
import { BsYoutube, BsTwitter } from "react-icons/bs"
import Link from "next/link"
import { NewsletterForm } from "./NewsletterForm"
import Image from "next/image"

export const Footer = () => {
	return (
		<footer>
			<div className="container flex flex-col mt-20">
				<div className="footer-grid max-w-6xl w-full grid-col  mx-auhref lg:gap-20 gap-10 justify-between">
					<div className="footer-grid-col grid lg:grid-flow-row grid-flow-col gap-y-4 lg:text-base text-sm">
						<Image src="/images/eu-logo.svg" alt="IERA Alliance" className="aspect-square object-contain" width="75" height = "75" />
						<div className="flex flex-col gap-2">
							<h4 className="text-secondary xl:text-xl text-lg">Stay Tuned</h4>
							<NewsletterForm />
							<p className="lg:text-sm text-[10px]">
								By subscribing you agree with the{" "}
								<span className="text-secondary underline underline-offset-1">privicy policy</span>
							</p>
						</div>
					</div>
					<ul className="footer-grid-col lg:text-base text-sm flex flex-col items-start gap-y-4 lg:pt-20 ">
						<li className="text-secondary font-bold">Quick Links</li>
						<li>
							<Link href="/activities-and-projects">Our Actions</Link>
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
					<ul className="footer-grid-col lg:text-base text-sm flex flex-col items-start gap-y-4 justify-end lg:pt-20">
						<li>
							<Link href="activities-and-projects">Our Projects</Link>
						</li>
						<li>
							<Link href="/who-we-are">Secretariat</Link>
						</li>
						<li>
							<Link href="/contact-us">Contact us</Link>
						</li>
					</ul>
					<div className="footer-grid-col flex flex-col items-start gap-y-4 lg:pt-20">
						<h4 className="xl:text-base text-sm text-secondary font-bold">Follow us</h4>
						<div className="flex items-center gap-x-4">
							<FaFacebookF
								size="26"
								className="hover:text-secondary text-[#464646] transition-all cursor-pointer"
							/>
							<BsTwitter
								size="26"
								className="hover:text-secondary text-[#464646] transition-all cursor-pointer"
							/>
							<FaLinkedinIn
								size="26"
								className="hover:text-secondary text-[#464646] transition-all cursor-pointer"
							/>
							<BsYoutube
								size="26"
								className="hover:text-secondary text-[#464646] transition-all cursor-pointer"
							/>
						</div>
					</div>
				</div>
				<div className="mt-20 mb-4 h-[1px] w-full bg-[#9F9F9F]"></div>
				<div className="mb-3">
					<span className="font-extralight flex items-center">
						<FaRegCopyright className="text-primary mr-2" />
						2023 IERA. All right reserved.
					</span>
					<p className="font-extralight">
						Design & development by{" "}
						<a
							href="https://www.facebook.com/Glteducenter"
							className="text-secondary cursor-pointer font-bold"
							target="_blank"
							rel="noreferrer"
						>
							Global IT LLC 2023
						</a>
					</p>
				</div>
			</div>
		</footer>
	)
}
