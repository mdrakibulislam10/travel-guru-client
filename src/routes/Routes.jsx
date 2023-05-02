import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import PlaceDetails from "../pages/Home/PlaceDetails/PlaceDetails";
import Hotels from "../pages/Hotels/Hotels/Hotels";

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
    {
        path: "/hotels/:id",
        element: <Hotels />,
        loader: ({ params }) => fetch(`https://travel-guru-server-eight-zeta.vercel.app/hotels/${params.id}`),
        children: [
            {
                // path: 
            }
        ]
    }
]);

export default router;