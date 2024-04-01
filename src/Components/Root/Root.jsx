import { Outlet, useLocation } from "react-router-dom";
 
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('details') 
    return(
        <div>
        <Toaster/>
        {noHeaderFooter ||  <Navbar/>}
         <Outlet/>
        {noHeaderFooter || <Footer/>}
    </div>
    )}
export default Root;