import { NavLink } from "react-router-dom"
import { CgNotes } from "react-icons/cg";
import { TfiPackage } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";



const DashboardSideNav = () => {
    const linkStyle = "flex items-center gap-x-2 text-lg px-5 py-2 "
    const linkActiveStyle = linkStyle +  "bg-blue-50 font-semibold rounded-xl"
    const linkNotActiveStyle = linkStyle + ""

    return (
        <div className="flex flex-col gap-y-4 p-7">
            <NavLink
                to="" end 
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <RiHomeLine size={23}/> Home
            </NavLink>
            <NavLink
                to="listings"
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <TfiPackage /> Products
            </NavLink>
            <NavLink
                to="orders"
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <CgNotes /> Orders
            </NavLink>
            <NavLink
                to="settings"
                className={({isActive}) => isActive ? linkActiveStyle : linkNotActiveStyle}
            >
                <IoSettingsOutline /> Settings
            </NavLink>
        </div>
    )
}

export default DashboardSideNav