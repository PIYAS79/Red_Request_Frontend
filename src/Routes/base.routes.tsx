import AboutPage from "../Pages/AboutPage";
import BloodBankPage from "../Pages/BloodBankPage";
import ContactPage from "../Pages/ContactPage";
import DonateBloodPage from "../Pages/DonateBloodPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";



const baseRoutes = [
    {
        name:'Home Page',
        path:'/',
        element:<HomePage/>
    },
    {
        name:'About Us',
        path:'/about',
        element:<AboutPage/>
    },
    {
        name:'Donate Blood',
        path:'/donate',
        element:<DonateBloodPage/>
    },
    {
        name:'Blood Bank',
        path:'/bank',
        element:<BloodBankPage/>
    },
    {
        name:'Contact Us',
        path:'/contact',
        element:<ContactPage/>
    },
    {
        name:'Login',
        path:'/login',
        element:<LoginPage/>
    },
    {
        name:'Sign Up',
        path:'/signup',
        element:<RegisterPage/>
    },
]


export default baseRoutes;