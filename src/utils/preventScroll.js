export const preventScroll = trigger => {
	if (trigger) {
		document.body.classList.add("modal-open")
	} else {
		document.body.classList.remove("modal-open")
	}
}