import { createBrowserRouter } from "react-router-dom";
import RootPage from "../Pages/RootPage";
import HomePage from "../Pages/HomePage";



const router = createBrowserRouter([
    {
        path:'/',
        element:<RootPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            }
        ]
    }
])

export default router;