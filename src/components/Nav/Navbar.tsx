import { IoMdSearch, } from "react-icons/io";
import { PiShoppingCartSimpleBold, PiUserCircleBold } from "react-icons/pi";
import NavLink from "./UI/NavLink";
import SideBar from "../SideBar/SideBar";
import useIsComponentVisibleOnClick from "../../hooks/useIsComponentVisibleOnClick";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Contexts/userContext";

interface PropsType {
    isDropDownVisible: boolean
    setIsDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const DropDown = ( {isDropDownVisible, setIsDropDownVisible}: PropsType) => {
    return (
        <div className={`absolute w-40 -right-full top-10 shadow-lg rounded-lg bg-white p-5 flex flex-col gap-y-3 ${isDropDownVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity ease-in-out duration-150`}>
            <div>
                <Link  onClick={() => setIsDropDownVisible(false)} to="/dashboard">Dashboard</Link>
            </div>
            <div>
                <Link  onClick={() => setIsDropDownVisible(false)} to="/orders">Orders</Link>
            </div>
            <div>
                <Link  onClick={() => setIsDropDownVisible(false)} to="/settings">Settings</Link>
            </div>
            <div>
                <button  onClick={() => setIsDropDownVisible(false)}>Logout</button>
            </div>
        </div>
    )
}

const Navbar = () => {

    const { ref: sideBarRef, isComponentsVisible: isSideBarVisible, setIsComponentVisible: setIsSideBarVisible } = useIsComponentVisibleOnClick(false)
    const { ref: dropDownRef, isComponentsVisible: isDropDownVisible, setIsComponentVisible: setIsDropDownVisible } = useIsComponentVisibleOnClick(false)

    const { user } = useContext(userContext)
    const navigate = useNavigate()

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
                    <div ref={dropDownRef} className="relative">
                        <PiUserCircleBold onClick={() => user ? setIsDropDownVisible(!isDropDownVisible) : navigate('/login')} className="cursor-pointer text-indigo-900" size={23} />
                        <DropDown isDropDownVisible={isDropDownVisible} setIsDropDownVisible={setIsDropDownVisible} />
                    </div>
                    {isSideBarVisible && <div onClick={() => setIsSideBarVisible(false)} className="fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-25"></div>}
                    <div ref={sideBarRef}>
                        <PiShoppingCartSimpleBold onClick={() => setIsSideBarVisible(true)} className="cursor-pointer text-indigo-900" size={22} />
                        <SideBar isVisible={isSideBarVisible} setIsComponentVisible={setIsSideBarVisible} />
                    </div>
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