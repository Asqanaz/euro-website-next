export const createFormData = data => {
	let formData = new FormData()

	for (let key in data) {
		formData.append(key, key === "img" || key === "background_img" ? data[key][0] : data[key])
	}

	return formData
}
