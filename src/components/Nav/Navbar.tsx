import { PiShoppingCartSimpleBold } from "react-icons/pi";
import NavLink from "./UI/NavLink";
import SideBar from '../SideBar/SideBar';
import Cart from "../../pages/Cart/Cart";
import { useEffect, useState } from "react";
import DropDown from "../DropDown/DropDown";
import SearchBar from './UI/SearchBar';
import { HiMenu } from "react-icons/hi";
import MobileNavbar from "./MobileNavbar";
import ThemeModeToggleDropdown from "../ui/ThemeModeToggleDropdown";

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
        <header className={`z-10 py-4 ${fixed ? 'sticky top-0' : ''} font-secondary w-full flex flex-col justify-center items-center gap-y-6 text-neutral-800 bg-white dark:bg-neutral-900 dark:text-white border-b`}>
            <div className="w-full flex items-center justify-between gap-x-3 px-4 lg:px-24 ">
                <div className=" text-3xl font-bold">
                    <h1>BookShop</h1>
                </div>
                <div className=" font-primary hidden sm:block relative grow max-w-[60%] ">
                    <SearchBar />
                </div>
                <div className=" flex items-center gap-x-5">
                    <SideBar
                        icon={<PiShoppingCartSimpleBold className="cursor-pointer" size={22}/>}
                    >
                        <Cart />
                    </SideBar>
                    <SideBar
                        className="md:hidden"
                        icon={<HiMenu className="cursor-pointer" size={22} />}
                    >
                        <MobileNavbar />
                    </SideBar>
                    <DropDown />
                    <div className="hidden md:block">
                        <ThemeModeToggleDropdown />
                    </div>
                </div>
            </div>
            <div className=" sm:hidden relative w-5/6 mx-auto ">
                <SearchBar />
            </div>
            <nav className="hidden w-full md:flex justify-center">
                <ul className=" font-accent gap-x-16 font-medium w-full h-full flex justify-center dark:text-neutral-50  text-lg">
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