import AdminPost from "../pages/admin/AdminPost"
import CreateUser from "../pages/admin/CreateUser"
import Requests from "../pages/admin/Requests"
import Subscribers from "../pages/admin/Subscribers"
import CreatePost from "../pages/admin/CreatePost"
import Users from "../pages/admin/Users"
import EditPage from "../pages/admin/EditPage"

export const ADMIN_ROUTES = [
  {
    path: "/admin/news",
    component: <AdminPost />,
    accessLevel: 3,
    title: "News",
    isInNavbar: true,
  },
  {
    path: "/admin/event",
    component: <AdminPost />,
    accessLevel: 3,
    title: "Events",
    isInNavbar: true,
  },
  {
    path: "/admin/users",
    component: <Users />,
    accessLevel: 1,
    title: "Users",
    isInNavbar: true,
  },
  {
    path: "/admin/create-user",
    component: <CreateUser />,
    accessLevel: 1,
    title: "Create User",
    isInNavbar: true,
  },
  {
    path: "/admin/requests",
    component: <Requests />,
    accessLevel: 2,
    title: "Requests",
    isInNavbar: true,
  },
  {
    path: "/admin/subscribers",
    component: <Subscribers />,
    accessLevel: 1,
    title: "Newsletter",
    isInNavbar: true,
  },
  {
    path: "/admin/create-post",
    component: <CreatePost />,
    accessLevel: 3,
    title: "Create Post",
    isInNavbar: false,
  },
  {
    path: "/admin/edit",
    component: <EditPage />,
    accessLevel: 2,
    title: "Edit Page",
    isInNavbar: false,
  },
]
