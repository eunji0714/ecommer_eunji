import {createBrowserRouter} from "react-router-dom";
import {Findid, Findpw, LogIn, Profile, Setpassword, Signup} from "./pages"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/findid",
        element: <Findid />
    },
    {
        path: "/findpw",
        element: <Findpw />
    },
    {
        path: "/change/password",
        element: <Setpassword />
    },
])

export default router;