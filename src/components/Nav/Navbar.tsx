import { IoMdSearch, } from "react-icons/io";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import NavLink from "./UI/NavLink";
import SideBar from '../SideBar/SideBar';
import Cart from "../../pages/Cart/Cart";
import { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";

const Navbar = () => {

    const [fixed, setfixed] = useState(false)

    const handleScroll = () => {

        if (window.scrollY >= 100)
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
        <header className={`z-10 h-[16dvh] ${fixed ? 'fixed top-0' : ''} px-3 2xl:px-24 w-full flex flex-col justify-center gap-y-6 bg-white`}>
            <div className="flex items-center justify-between">
                <div className=" text-indigo-950 text-3xl font-bold">
                    <h1>BookShop</h1>
                </div>
                <div className="relative grow max-w-[40%]">
                    <IoMdSearch className="absolute top-0 bottom-0 left-2 my-auto hover:cursor-pointer text-indigo-900" size={22} />
                    <input
                        className=" py-1.5 pl-9 w-full ring-1 ring-slate-100 rounded-2xl bg-[#f6f5f7] focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600"
                        type="text" placeholder="Search books, authors, genres"
                    />
                </div>
                <div className="flex items-center gap-x-5">
                    <DropDown />
                    <SideBar icon={<PiShoppingCartSimpleBold size={22} />}>
                        <Cart />
                    </SideBar>
                </div>
            </div>
            <nav className="flex justify-center">
                <ul className="w-full flex justify-evenly text-slate-600 text-xs sm:text-base">
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