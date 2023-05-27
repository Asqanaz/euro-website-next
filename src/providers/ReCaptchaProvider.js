"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export default function ReCaptchaProvider({ children }) {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
			language="en"
			scriptProps={{
				async: false,
				defer: false,
				appendTo: "head",
				nonce: undefined
			}}
			container={{
				parameters: {
					badge: "bottomleft",
					theme: "light"
				}
			}}
		>
			{children}
		</GoogleReCaptchaProvider>
	)
}
