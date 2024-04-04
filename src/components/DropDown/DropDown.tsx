import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Contexts/userContext";
import { PiUserCircleBold } from "react-icons/pi";
import useIsComponentVisibleOnClick from "../../hooks/useIsComponentVisibleOnClick";
import { logout } from "../../services/api/authentication";

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
            <div>
                <Link  onClick={() => setIsDropDownVisible(false)} to="/orders">Orders</Link>
            </div>
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

    const { ref: dropDownRef, isComponentsVisible: isDropDownVisible, setIsComponentVisible: setIsDropDownVisible } = useIsComponentVisibleOnClick(false)

    const { user } = useContext(userContext)
    const navigate = useNavigate()

    return (
        <div ref={dropDownRef} className="relative">
        <PiUserCircleBold onClick={() => user ? setIsDropDownVisible(!isDropDownVisible) : navigate('/login')} className="cursor-pointer text-indigo-900" size={23} />
            <DropDownMenu isDropDownVisible={isDropDownVisible} setIsDropDownVisible={setIsDropDownVisible} />
        </div>
    )
}

export default DropDown