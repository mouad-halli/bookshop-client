import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenu
} from "@/components/ui/sidebar"
import { Container, LayoutDashboard, Package } from "lucide-react"
import { Link } from "react-router-dom"

const items = [
    {
      title: "Dashboard",
      url: "",
      icon: LayoutDashboard ,
    },
    {
        title: "Listings",
        url: "listings",
        icon: Package  ,
    },
    {
        title: "Orders",
        url: "orders",
        icon: Container ,
    }, 
]

const DashboardSidebarContent = () => {
    return (
        <SidebarMenu className="px-2">
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link to={item.url}>
                <item.icon className="mr-2 size-4" />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        </SidebarMenu>
    )
}

export default DashboardSidebarContent