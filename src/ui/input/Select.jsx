import React, { useState, useEffect, useRef } from "react"

export const SingleSelect = ({ selectOptions }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState("")

	const handleSelectOption = (label) => {
		setSelectedOption(label)
		setIsOpen(false)
	}

	const list = useRef()
	useEffect(() => {
		document.addEventListener("click", handleDocumentClicked)
		return () =>
			document.removeEventListener("click", handleDocumentClicked)
	}, [])

	const handleDocumentClicked = (e) => {
		if (list.current && list.current.contains(e.target)) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}
	return (
		<div className="relative mx-auto flex min-h-[50px] w-1/2 items-center rounded-full border-2 border-green-200 bg-gray-200 p-2 px-5">
			<div
				className="flex h-full w-full items-center gap-x-8"
				role="presentation"
				onClick={() => setIsOpen(true)}
				ref={list}>
				{selectedOption || "SingleSelect"}
			</div>
			<div className="absolute right-[20px] flex h-full items-center gap-5">
				<div className="my-auto h-[80%] w-0 rounded-full border border-black" />
				<button
					className="text-[20px] text-black"
					onClick={() => setIsOpen(false)}>
					X
				</button>
			</div>

			{isOpen && (
				<ul
					role="presentation"
					className="absolute left-0 top-full z-20 h-fit  w-full rounded-2xl bg-gray-300"
					onClick={(e) => e.stopPropagation()}>
					{selectOptions.length ? (
						selectOptions.map((item) => (
							<li
								className={`p-5 ${
									selectedOption === item.label
										? "bg-blue-200"
										: "bg-transparent"
								} rounded-2xl hover:bg-blue-100`}
								role="presentation"
								key={item.id}
								onClick={() => handleSelectOption(item.label)}>
								{item.label}
							</li>
						))
					) : (
						<li className="p-5">No select element</li>
					)}
				</ul>
			)}
		</div>
	)
}
