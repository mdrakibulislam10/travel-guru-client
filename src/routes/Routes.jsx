import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import PlaceDetails from "../pages/Home/PlaceDetails/PlaceDetails";
import Hotels from "../pages/Hotels/Hotels/Hotels";
import Login from "../pages/Login/Login";
import Authentication from "../layouts/authentication";
import HotelsContainer from "../layouts/HotelsContainer";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../privateRoute/privateRoute";

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
        element: <HotelsContainer />,
        children: [
            {
                path: "/hotels/:id",
                element: <PrivateRoute> <Hotels /> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-guru-server-eight-zeta.vercel.app/hotels/${params.id}`),
            }
        ]
    },
    {
        path: "/authentication",
        element: <Authentication />,
        children: [
            {
                path: "/authentication",
                element: <Navigate to={"/authentication/login"} />
            },
            {
                path: "/authentication/login",
                element: <Login />
            },
            {
                path: "/authentication/signUp",
                element: <SignUp />
            }
        ]
    }
]);

export default router;