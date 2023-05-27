export const addContact = async body => {
	const post = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}subscribe`, {
		method: "POST",
		body: JSON.stringify(body)
	})

	const res = await post.json()

	// if (post.status === 400) {
	// 	return "Captcha token is invalid"
	// }

    return post
}
