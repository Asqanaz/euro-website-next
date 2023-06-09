"use client"

// import { useVerifyCaptchaToken } from "../../hooks/useVerifyCaptchaToken";

import { Input } from "@/ui/input/Input"
import { useState } from "react"
import { useForm } from "react-hook-form"
// import { useSubscribeMutation } from "../../store/slices/subscribers";
import { IoIosArrowForward } from "react-icons/io"
// import { GoogleReCaptcha } from "react-google-recaptcha-v3";

export const NewsLetterForm = () => {
	const {
		handleSubmit,
		formState: { errors, isValid },
		register,
		reset,
	} = useForm({
		reValidateMode: "onSubmit",
		mode: "onSubmit",
	})

	const [message, setMessage] = useState("")

	const onSubmit = async (data) => {
		if (data) {
			await subscribe({
				email: data.email,
				recaptchaToken: token,
			})
		}

		if (isValid) reset()
	}

	return (
		<form
			className=""
			noValidate
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="email"
				placeholder="Email address"
				extraStyles={"relative w-full pr-10"}
				register={register}
				name={"email"}
				errors={errors}
				validationSchema={{
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: "Invalid email address",
					},
					required: true,
				}}
				endIcon={
					<button
						type="submit"
						className="absolute top-[calc(50%-15px)] left-[calc(100%-40px)] text-secondary cursor-pointer"
					>
						<IoIosArrowForward
							role="button"
							type="submit"
							className=""
							size="30px"
						/>
					</button>
				}
			/>

			{/* <GoogleReCaptcha onVerify={verifyToken} /> */}
		</form>
	)
}
