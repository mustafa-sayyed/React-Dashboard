import { createBrowserRouter, Navigate } from "react-router";
import { AIChat, Home, Login, ManageHealth, NotFound, Profile, Reminders, Signup } from "./pages";
import DashboardLayout from "./Layout/DashboardLayout";



const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <><DashboardLayout /><Navigate to={"home"} /></>,
        children: [
            {
                index: true,
                path: "home",
                element: <Home />
            },
            {
                path: "reminders",
                element: <Reminders />,
            },
            {
                path: "manage-health",
                element: <ManageHealth />
            },
            {
                path: "profile",
                element: <Profile />    
            },
            {
                path: "ai-chat",
                element: <AIChat />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/",
        element: <Navigate to={"/dashboard/home"} replace={true} />
    },
    {
        path: "*",
        element: <NotFound />
    }
])


export default router;