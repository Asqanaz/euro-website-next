import Image from "next/image"
import Link from "next/link"

export const SuccessPage = () => {
	return (
		<div className="flex flex-col items-center w-full py-20">
			<Image
				src="/images/contact-success.svg"
				alt="Successfully sended message!"
				width="500"
				height = "300"
				className="object-cover"
			/>

			<p className="text-2xl text-secondary mt-4 mb-2">
				Your message has been send. We will reply as soon as possible
			</p>

            <Link href = "/" className="underline text-xl text-primary underline-offset-4 font-extralight">Back to Home</Link>
		</div>
	)
}
