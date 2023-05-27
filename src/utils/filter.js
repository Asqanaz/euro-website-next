export const filterBySearch = (searchQuery, data) => {
	return data?.filter(d => {
		if (searchQuery) {
			return d.title.toLowerCase().includes(searchQuery.toLowerCase())
		}
		return true
	})
}
