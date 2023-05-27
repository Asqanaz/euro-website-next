"use client"
import { useEffect, useLayoutEffect, useState } from "react"

const queries = ["(min-width: 1281px)", "(min-width: 1025px)", "(min-width: 769px)", "(min-width: 501px)"]
export const useMatchMedia = () => {
    const [value, setValue] = useState()
	// useEffect(() => {
    // })
	useLayoutEffect(() => {
        const mediaQueryLists = queries.map(query => matchMedia(query))
        const getValues = () => mediaQueryLists.map(query => query.matches)
		const handler = () => setValue(getValues)
		mediaQueryLists.forEach(mql => mql.addEventListener("change", handler))

		return () => mediaQueryLists.forEach(mql => mql.removeEventListener("change", handler))
	})
	return ["is1280", "is1024", "is768", "is500"].reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: value && value[index]
		}),
		{}
	)
}
