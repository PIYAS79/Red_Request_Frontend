import { createBrowserRouter } from "react-router-dom";
import RootPage from "../Pages/RootPage";
import generateRoutes from "./react.routes";
import baseRoutes from "./base.routes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: generateRoutes(baseRoutes)
    }
])

export default router;

