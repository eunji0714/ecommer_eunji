import {createBrowserRouter} from "react-router-dom";
import {Findid, Findpw, LogIn, Main, Movies, Profile, Setpassword, Signup, Tvs} from "./pages"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/login",
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
    {
        path: "/movies",
        element: <Movies />
    },
    {
        path: "/tvs",
        element: <Tvs/>
    },
])

export default router;