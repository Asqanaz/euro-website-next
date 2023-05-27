"use client"

import React, { useCallback, useState } from "react"
import { Button } from "../../ui/button/Button"
// import { GoogleReCaptcha } from "react-google-recaptcha-v3"
import { Input } from "@/ui/input/Input"
import { useForm } from "react-hook-form"
import { addContact } from "@/lib/contactRequest"
import { useRouter } from "next/navigation"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { SuccessPage } from "./components/SuccessPage"
// import Spinner from "@/ui/spinner/Spinner"
// import { useVerifyCaptchaToken } from "../../hooks/useVerifyCaptchaToken"
// import { SuccessPage } from "../../components/common/SuccessPage"

function ContactUs() {
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit
	} = useForm({
		mode: "onSubmit",
		reValidateMode: "onSubmit"
	})

	const router = useRouter()

	const { executeRecaptcha } = useGoogleReCaptcha()

	const [notification, setNotification] = useState("")

	const handleCreateContact = useCallback(
		async body => {
			let response
			const fieldData = {
				name: body.first_name,
				surname: body.last_name,
				text: body.message,
				email: body.email
			}
			if (!executeRecaptcha) {
				setNotification("Execute recaptcha not yet available")
				return
			}
			executeRecaptcha("enquiryFormSubmit").then(async gReCaptchaToken => {
				response = await addContact({ ...fieldData, recaptchaToken: gReCaptchaToken })

				if (response.status === 400) {
					setNotification("Something went wrong, try again!")
				}

                if(response.status === 200) return <SuccessPage />
			})
		},
		[executeRecaptcha]
	)

	return (
		<section>
			<div className="container flex flex-col gap-16 py-6 px-8 md:px-32">
				<h2 className="text-secondary text-4xl lg:text-6xl font-semibold">Contact us</h2>
				<p className="max-w-4xl text-base sm:text-lg lg:text-xl md:text-left text-center text-primary">
					Please use the web form below and we will get back to you shortly. Your personal details will only
					be used to respond to your message.
				</p>
				<form onSubmit={handleSubmit(handleCreateContact)} className="flex flex-col gap-10" noValidate>
					<div className="flex flex-col lg:flex-row gap-16">
						<div className="relative w-full lg:w-1/3 felx-1 flex flex-col justify-between gap-8">
							<Input
								extraStyles={"w-full"}
								type="text"
								name="first_name"
								placeholder="Name"
								register={register}
								errors={errors}
								validationSchema={{
									required: true
								}}
							/>
							<Input
								extraStyles={"w-full"}
								type="text"
								name="last_name"
								placeholder="Last name"
								register={register}
								errors={errors}
								validationSchema={{
									required: true
								}}
							/>
							<Input
								extraStyles={"w-full"}
								type="email"
								name="email"
								placeholder="Email"
								register={register}
								errors={errors}
								validationSchema={{
									required: true,
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Invalid Email Address"
									}
								}}
							/>
						</div>
						<div className="w-full lg:w-2/3 flex-1">
							<textarea
								id=""
								cols="30"
								rows="10"
								placeholder="Write a message..."
								className={`h-full w-full px-4 py-4 border outline-none resize-none bg-input ${
									errors && errors.message?.type === "required"
										? "border-red-600"
										: "border-tranpsarent"
								}`}
								{...register("message", {
									required: true
								})}
							/>
						</div>
					</div>
					<div className=" w-full flex flex-col md:flex-row justify-end items-center gap-16 md:gap-32 lg:gap-64 xl:gap-96">
						<div className="relative">
							<label htmlFor="policy" className="flex flex-row gap-3">
								<input
									type="checkbox"
									id="policy"
									className="block"
									{...register("privacy_policy", {
										required: true
									})}
								/>
								<p className="text-base lg:text-xl">
									I accept <span className=" text-secondary cursor-pointer">privicy policy</span>
								</p>
							</label>
							<p
								className={`absolute text-red-600 text-base lg:text-xl left-6 ${
									errors?.privacy_policy ? "block" : "hidden"
								}`}
							>
								Please accept policy
							</p>
						</div>
						<Button
							variant="secondary"
							extraStyles={"px-8 md:w-[200px] h-[60px] w-full"}
							fill={"contained"}
						>
							{/* {isLoading ? <Spinner color={1} /> : "Send message"} */}
							Send Message
						</Button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default ContactUs
