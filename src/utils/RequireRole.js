import jwtDecode from "jwt-decode"
import React from "react"
import { ADMIN_ROUTES } from "./adminRoutes"
import { Outlet, useLocation } from "react-router-dom"
import Cookies from "js-cookie"

export const RequireRole = () => {
	const token = Cookies.get("token")

	const { roleId } = jwtDecode(token)

	const location = useLocation()

	const component = ADMIN_ROUTES.find(routes => routes.path === location.pathname)

	return component?.accessLevel >= roleId ? (
		<Outlet />
	) : (
		<div className="h-[calc(100vh-140px)] w-full flex items-center justify-center">
			<h2 className="text-4xl">Page Not Found</h2>
		</div>
	)
}
