import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { ChevronsUpDown } from "lucide-react"
import DashboardSidebarDropDown from "./DashboardSidebarDropDown"
import { useContext } from "react"
import { userContext } from "@/Contexts/userContext"

const DashboardSidebarFooter = () => {
    const { user } = useContext(userContext)

    return (
        <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        {/* <Command className="size-4" /> */}
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user && `${user.firstname} ${user.lastname}`}</span>
                      <span className="truncate text-xs">{user && user.email}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DashboardSidebarDropDown />
              </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default DashboardSidebarFooter