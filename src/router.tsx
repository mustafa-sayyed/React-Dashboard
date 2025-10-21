import { createBrowserRouter } from "react-router";
import { Home, Login, Signup } from "./pages";



const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    }
])


export default router;