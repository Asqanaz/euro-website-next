import React from "react"

export const OurValues = () => {
	return (
		<div className="flex xl:flex-row flex-col gap-20 my-20">
			<div className="flex-1 flex flex-col gap-y-8">
				<h2 className="text-4xl text-secondary font-bold">Our Values</h2>
				<p className="font-bold text-2xl">All IERA actions respect the following basic values:</p>
				<ul className="list-disc ml-6 leading-relaxed md:text-3xl text-2xl md:leading-relaxed space-y-12">
					<li>
						Respect of Human Rights as stipulated in the EU Charter of Fundamental Rights: protection of
						individual freedom and private life, non-discrimination of sex, race, religion, access to
						justice;
					</li>
					<li>​Democratic citizenship with the full political rights for everybody;</li>
					<li>Rule of law, equal rights of citizens before the law based on an independent judiciary;​</li>
					<li>​ Respect of minorities.</li>
				</ul>
			</div>
            <div className="flex-1 flex items-center justify-center">
                <img src="/images/our-values.svg" alt="Our Values" />
            </div>
		</div>
	)
}
