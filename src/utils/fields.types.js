export const fields = {
	news: {
		title: {
			type: "text",
			placeholder: "Title"
		},
		img: { type: "file", placeholder: "Image" },
		date: { type: "date", placeholder: "Date" },
		description: {
			type: "textarea",
			placeholder: "Description"
		}
	},
	event: {
		title: { type: "text", placeholder: "Title" },
		startDate: { type: "date", placeholder: "Start Date" },
		endDate: { type: "date", placeholder: "End Date" },
		img: { type: "file", placeholder: "Image" },
		description: { type: "textarea", placeholder: "Description" }
	},
	user: {
		name: { type: "text", placeholder: "Full Name" },
		login: { type: "text", placeholder: "Nickname" },
		password: { type: "password", placeholder: "Password" }
	}
}
