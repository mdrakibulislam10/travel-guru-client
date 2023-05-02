import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import PlaceDetails from "../pages/Home/PlaceDetails/PlaceDetails";

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
            },
            {
                path: "/places/details/:id",
                element: <PlaceDetails />,
                loader: async ({ params }) => fetch(`https://travel-guru-server-eight-zeta.vercel.app/places/${params.id}`)
            }
        ]
    },
]);

export default router;