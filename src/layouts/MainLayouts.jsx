import { Outlet } from "react-router-dom"
import Navbar from "../components/header/Navbar"
import Footer from "../components/Footer"
import Menubar from "../components/header/Menubar"
import Banner from "../pages/Banner"

function MainLayouts() {
  return (
    <main className="dark:bg-black overflow-hidden">
        <Navbar/>
        <Menubar/>
        <Outlet/>
        <Footer/>
    </main>
    
  )
}

export default MainLayouts