import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Navigate to={"/places"} />
            },
            {
                path: "/places",
                element: <Home />,
                loader: () => fetch("https://travel-guru-server-eight-zeta.vercel.app/places")
            }
        ]
    },
]);

export default router;