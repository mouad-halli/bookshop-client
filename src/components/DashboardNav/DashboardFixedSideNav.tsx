import { CgNotes } from "react-icons/cg";
import { TfiPackage } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const DashboardFixedSideNav = () => {
    const linkStyle = " rounded-full shadow-inner bg-slate-400 p-3 bg-opacity-60 hover:bg-opacity-100 "
    const linkActiveStyle = linkStyle +  "bg-opacity-100"
    const linkNotActiveStyle = linkStyle + ""

    return (
        <div className="fixed sm:hidden left-0 top-28 w-16 rounded-full bg-slate-300 bg-opacity-90 text-black flex flex-col
            items-center gap-y-8 py-2 ">
            <NavLink
                to="" end 
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <RiHomeLine className="text-2xl" />
            </NavLink>
            <NavLink
                to="listings" end 
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <CgNotes className="text-2xl" />
            </NavLink>
            <NavLink
                to="orders" end 
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <TfiPackage className="text-2xl" />
            </NavLink>
            <NavLink
                to="settings" end 
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <IoSettingsOutline className="text-2xl" />
            </NavLink>
        </div>
    )
}

export default DashboardFixedSideNav