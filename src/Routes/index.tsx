import { createBrowserRouter } from "react-router-dom";
import RootPage from "../Pages/RootPage";
import HomePage from "../Pages/HomePage";
import DonateBloodPage from "../Pages/DonateBloodPage";
import DonorsPage from "../Pages/DonorsPage";
import BloodBankPage from "../Pages/BloodBankPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/signup',
                element: <RegisterPage />
            },
            {
                path: '/donate',
                element: <DonateBloodPage />
            },
            {
                path: '/donors',
                element: <DonorsPage />
            },
            {
                path: '/bank',
                element: <BloodBankPage />
            }
        ]
    }
])

export default router;



// https://i.ibb.co/yRb2FWD/pngwing-com-4.png
// https://i.ibb.co/SKYxVB9/pngwing-com-3.png
// https://i.ibb.co/KmdYNmt/pngwing-com-2.png
// https://i.ibb.co/XYV6zQL/pngwing-com-1.png
// https://i.ibb.co/rQ5bG5Z/Pngtree-love-blood-donation-5395179.png



// -----
// https://i.ibb.co/vZfmVGQ/Pngtree-doctor-and-donation-of-the-6288026.png
// https://i.ibb.co/X5VgptN/blood-drop.png
// https://i.ibb.co/pZ81T3Y/blood-bank.png
// https://i.ibb.co/J3JXVJd/blood.png