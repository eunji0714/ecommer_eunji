import {createBrowserRouter} from "react-router-dom";
import {LogIn, Signup} from "./pages"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn />
    },
    {
        path: "/signup",
        element: <Signup />
    },
])

export default router;