import { PiShoppingCartSimpleBold } from "react-icons/pi";
import NavLink from "./UI/NavLink";
import SideBar from '../SideBar/SideBar';
import Cart from "../../pages/Cart/Cart";
import { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import SearchBar from './UI/SearchBar';

const Navbar = () => {

    const [fixed, setfixed] = useState(false)

    const handleScroll = () => {

        if (window.scrollY > 0)
            setfixed(true)
        else if (window.scrollY === 0)
            setfixed(false)

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`z-10 pt-4 ${fixed ? 'sticky top-0' : ''} font-secondary w-full flex flex-col justify-center items-center gap-y-6 bg-white border-b`}>
            <div className="w-full  flex items-center justify-between px-4 lg:px-24">
                <div className=" text-3xl font-bold text-dark-green">
                    <h1>BookShop</h1>
                </div>
                <div className=" font-primary hidden sm:block relative grow max-w-[60%] md:max-w-[40%]">
                    <SearchBar />
                </div>
                <div className=" flex items-center gap-x-5">
                    <DropDown />
                    <SideBar icon={<PiShoppingCartSimpleBold size={22} />}>
                        <Cart />
                    </SideBar>
                </div>
            </div>
            <div className=" sm:hidden relative w-5/6 mx-auto ">
                <SearchBar />
            </div>
            <nav className="w-full  flex justify-center">
                <ul className=" font-accent text-lg font-medium w-full h-full flex justify-center gap-x-32 text-slate-700">
                    <NavLink linkText="Home" direction="/"/>
                    <NavLink linkText="genres" direction=""/>
                    <NavLink linkText="Last added" direction=""/>
                    <NavLink linkText="About Us" direction=""/>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar