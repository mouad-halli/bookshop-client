import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { useSidebar } from "@/components/ui/sidebar"
import { userContext } from "@/Contexts/userContext"
import { logout } from "@/services/api/authentication"
import { House, LogOut, Settings } from "lucide-react"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

const DashboardSidebarDropDown = () => {
    
    const { isMobile } = useSidebar()
    const navigate = useNavigate()
    
    const { handleLogout: logoutUserContext } = useContext(userContext)

    const handleLogout = async () => {
        try {
            await logout()
            logoutUserContext()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <DropdownMenuContent
            // className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            className="w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
        >
            <DropdownMenuGroup>
                <Link to="/">
                    <DropdownMenuItem>
                        <House className="mr-2 size-4" />
                        Home
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link to="/settings">
                    <DropdownMenuItem>
                        <Settings className="mr-2 size-4" />
                        Settings
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 size-4" />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    )
}

export default DashboardSidebarDropDown