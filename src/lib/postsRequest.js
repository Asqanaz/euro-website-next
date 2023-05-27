export const getNews = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}news-events?type=news&sort=DESC`)

	const data = await res.json()

	if (!res.ok) throw new Error("Failed to fetch news")

	return data.result
}

export const getEvent = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}news-events?type=event&sort=DESC`)

	const data = await res.json()

	if (!res.ok) throw new Error("Failed to fetch news")

	return data.result[0]
}

export const getAllPosts = async queries => {
	// const { sort, startDate, endDate, type, limit, page } = queries

	let queryParams = ""
	Object.entries(queries).forEach(([key, value]) => (queryParams += `${key}=${value}&`))

	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}news-events?${queryParams}`)

	// type=${type}&sort=${sort}&startDate=${startDate}&endDate=${endDate}&limit=${limit}&page=${page}
	const data = await res.json()

	return data
}
