import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

const DashboardSidebarHeader = () => {
    return (
        <SidebarMenu>
        <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
            <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {/* <Command className="size-4" /> */}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Bookshop</span>
                  <span className="truncate text-xs">Dashboard</span>
                </div>
            </a>
            </SidebarMenuButton>
        </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default DashboardSidebarHeader