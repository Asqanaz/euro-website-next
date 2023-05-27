import React, { forwardRef, useEffect, useState } from "react"
import { BsCalendar } from "react-icons/bs"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { format } from "date-fns"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { dateFormat } from "@/utils/dateFormat"
import CustomDatePickerInput from "@/ui/input/CustomDatePickerInput"

export const FilterDate = ({ open }) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const [isOpen, setIsOpen] = useState(false)

	const [dateRange, setDateRange] = useState([dateFormat(searchParams.get('startDate')), dateFormat(searchParams.get("endDate"))])

	const [startDate, endDate] = dateRange

	useEffect(() => {
		if (!open) setIsOpen(false)
	}, [open])


	return (
		<div className="" onClick={() => setIsOpen(!isOpen)} role="presentation">
			<ReactDatePicker
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				placeholderText="Date / Time"
				onChange={update => {
					setDateRange(update)

					const params = new URLSearchParams(searchParams)
					if (update[0]) {
						params.set("startDate", format(update[0], "yyyy-MM-dd"))
					} else {
						params.delete("startDate")
					}

					if (update[1]) {
						params.set("endDate", format(update[1], "yyyy-MM-dd"))
					} else {
						params.delete("endDate")
					}
					const dateQuery = params.toString()
					router.push(`${pathname}?${dateQuery}`)
				}}
				customInput={<CustomDatePickerInput />}
			/>
		</div>
	)
}
