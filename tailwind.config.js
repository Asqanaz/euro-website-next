/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "501px",
				md: "769px",
				lg: "1025px",
				xl: "1281px",
				"2xl": "1537px"
			},
			padding: {
				DEFAULT: "1rem"
			}
		},
		screens: {
			sm: "500px",
			md: "769px",
			lg: "1025px",
			xl: "1281px",
			"2xl": "1537px"
		},
		extend: {
			fontFamily: {
				sofia: ["SofiaPro"]
			},
			colors: {
				primary: "#464646",
				secondary: "#4074BA",
				"button-hover": "#FDDA00",
				bodyBackground: "#F5F5F5",
				sectionBackground: "#F8F8F8",
				goalSection: "#F8F8F8",
				yellowGoal: "#FDDA00",
				ourValuesDiv: "#235DAB27",
				newsTitle: "#303030",
				input: "#EEEEEE"
			},
			backgroundImage: {
				// ourValuesBack: "url(../public/images/ourValuesBack.webp)",
				// eventSection: "url(../public/images/event-bg.webp)",
				// "mobile-eventSection": "url(../public/images/mobile-event-bg.webp)",
				// newsBg: "url(../public/images/homeNewsBg.webp)",
				// homeBackground: "url(../public/images/home-bg.webp)",
				// "about-box": "url(../public/images/about-us-box.webp)"
				"about-bg": "url(/images/about-bg.png)",
				"mobile-about-bg": "url(/images/mobile-about-bg.webp)",

			}
		}
	},
	plugins: []
}
