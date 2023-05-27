import { forwardRef } from "react"
import { BsCalendar } from "react-icons/bs"

const CustomDatePickerInput = forwardRef(({ value, onChange, onClick, placeholder }, ref) => {
	return (
		<div className="bg-input w-full border px-2 py-4 flex items-center rounded-2xl justify-between">
			<input
				ref={ref}
				value={value}
				onClick={onClick}
				onChange={onChange}
				placeholder={placeholder}
				className="border-none outline-none w-full px-2 bg-transparent"
			/>
			<BsCalendar />
		</div>
	)
})

CustomDatePickerInput.displayName = "CustomDatePickerInput"

export default CustomDatePickerInput