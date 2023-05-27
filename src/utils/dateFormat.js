export const dateFormat = date => {
	
	if(!date) return
	
	const splitDate = date.split("-")
	
	let d = splitDate.map((d, i) => {
		if (i === 1) {
			return Number(d) - 1
		}

		return Number(d)
	})

	return new Date(...d)
}