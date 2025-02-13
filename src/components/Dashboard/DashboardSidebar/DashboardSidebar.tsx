import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import DashboardSidebarContent from "./DashboardSidebarContent"
import DashboardSidebarHeader from './DashboardSidebarHeader';
import DashboardSidebarFooter from "./DashboardSidebarFooter";

const DashboardSidebar = () => {

    return (
        <Sidebar collapsible="icon" >
            <SidebarHeader>
                <DashboardSidebarHeader />
            </SidebarHeader>
            <SidebarContent className="py-4">
                <DashboardSidebarContent />
            </SidebarContent>
            <SidebarFooter>
                <DashboardSidebarFooter />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

export default DashboardSidebar