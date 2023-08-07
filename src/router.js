import {createBrowserRouter} from "react-router-dom";
import {Details, Findid, Findpw, LogIn, Main, Movies, Profile, Setpassword, Signup, Tvs, Users} from "./pages"

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
    {
        path: "/movies/:movieid",
        element: <Details/>
    },
    {
        path: "/tvs/:tvid",
        element: <Details/>
    },
    {
        path: "/users",
        element: <Users/>
    },
])

export default router;