import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Contexts/userContext";
import { PiUserCircleBold } from "react-icons/pi";
import useIsComponentVisibleOnClick from "../../hooks/useIsComponentVisibleOnClick";
import { logout } from "../../services/api/authentication";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { CircleUser, LayoutDashboard, LogOut, Settings, User } from "lucide-react";

interface PropsType {
    isDropDownVisible: boolean
    setIsDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const DropDownMenu = ( {isDropDownVisible, setIsDropDownVisible}: PropsType) => {

    const { handleLogout: logoutUserContext } = useContext(userContext)

    const handleLogout = async () => {
        try {
            await logout()
            logoutUserContext()
            setIsDropDownVisible(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`absolute w-40 -right-full top-10 shadow-lg rounded-lg bg-white p-5 flex flex-col gap-y-3 ${isDropDownVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity ease-in-out duration-150`}>
            <div>
                <Link  onClick={() => setIsDropDownVisible(false)} to="/dashboard">Dashboard</Link>
            </div>
            {/* <div>
                <Link  onClick={() => setIsDropDownVisible(false)} to="/orders">Orders</Link>
            </div> */}
            <div>
                <Link  onClick={() => setIsDropDownVisible(false)} to="/settings">Settings</Link>
            </div>
            <div>
                <button  onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

const DropDown = () => {

    
    const { handleLogout: logoutUserContext } = useContext(userContext)

    const handleLogout = async () => {
        try {
            await logout()
            logoutUserContext()
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate()

    const { user } = useContext(userContext)

    if (user)
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <CircleUser size={22} className=" cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 font-accent">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("profile")}>
                            <User className="mr-2 size-4" />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("settings")}>
                            <Settings className="mr-2 size-4" />
                            Settings
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    { user.isSeller && 
                        <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("dashboard")}>
                            <LayoutDashboard  className="mr-2 size-4" />
                            Dashboard
                        </DropdownMenuItem>
                    }
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                        <LogOut className="mr-2 size-4" />
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    else
        return <h1
                className="font-accent font-medium cursor-pointer"
                onClick={() => navigate("login")}
                >
                    Log in
                </h1>


    // const { ref: dropDownRef, isComponentsVisible: isDropDownVisible, setIsComponentVisible: setIsDropDownVisible } = useIsComponentVisibleOnClick(false)

    // const { user } = useContext(userContext)
    // const navigate = useNavigate()

    // return (
    //     <div ref={dropDownRef} className="relative z-10">
    //         <PiUserCircleBold onClick={() => user ? setIsDropDownVisible(!isDropDownVisible) : navigate('/login')} className="cursor-pointer text-slate-600" size={23} />
    //         <DropDownMenu isDropDownVisible={isDropDownVisible} setIsDropDownVisible={setIsDropDownVisible} />
    //     </div>
    // )
}

export default DropDown