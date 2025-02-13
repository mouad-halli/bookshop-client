import { NavLink } from "react-router-dom"
import { CgNotes } from "react-icons/cg";
import { TfiPackage } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";



const DashboardSideNav = () => {
    const linkStyle = "flex items-center justify-center md:justify-start md:gap-x-2 text-lg md:px-5 py-2 "
    const linkActiveStyle = linkStyle +  "bg-blue-50 font-semibold rounded-xl"
    const linkNotActiveStyle = linkStyle + ""

    

    return (
        <div className="flex flex-col justify-center gap-y-4 py-7 md:p-7">
            <NavLink
                to="" end 
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <RiHomeLine className="text-3xl md:text-2xl" />
                <span className="hidden md:inline-flex">Home</span>
            </NavLink>
            <NavLink
                to="listings"
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <TfiPackage className="text-3xl md:text-2xl" />
                <span className="hidden md:inline-flex">Products</span>
            </NavLink>
            <NavLink
                to="orders"
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <CgNotes className="text-3xl md:text-2xl" />
                <span className="hidden md:inline-flex">Orders</span>
            </NavLink>
            <NavLink
                to="settings"
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <IoSettingsOutline className="text-3xl md:text-2xl" />
                <span className="hidden md:inline-flex">Settings</span>
            </NavLink>
        </div>
    )
}

export default DashboardSideNav