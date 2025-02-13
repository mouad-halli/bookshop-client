import { Outlet } from 'react-router-dom'
import DashboardSideNav from '../components/DashboardNav/DashboardSideNav'
import DashboardTopNav from '../components/DashboardNav/DashboardTopNav'
import DashboardFixedSideNav from '../components/DashboardNav/DashboardFixedSideNav'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar/DashboardSidebar'
import { Separator } from '@/components/ui/separator'
import ThemeModeToggleDropdown from '@/components/ui/ThemeModeToggleDropdown'
import { Toaster } from "@/components/ui/toaster"

const DashboardLayout = () => {

    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main className='flex grow flex-col bg-white dark:bg-neutral-950 dark:text-neutral-50'>
                <div className='flex items-center py-4 px-4 gap-x-4'>
                    <SidebarTrigger variant="secondary" />
                    <Separator orientation="vertical" />
                    <div className='ml-auto '>                        
                        <ThemeModeToggleDropdown />
                    </div>
                </div>
                <Separator orientation="horizontal"/>
                <div className='flex-1 p-4'>
                    <Outlet />
                    <Toaster />
                </div>
            </main>
        </SidebarProvider>
    )

    return (
        <div className='min-h-screen flex flex-col font-Asap'>
            <div className='w-full h-16'>
                <DashboardTopNav />
            </div>
            <div className='w-full grow flex flex-row'>
                <div className='hidden sm:block shrink-0 w-20 md:w-60'>
                    <DashboardSideNav />
                </div>
                <DashboardFixedSideNav />
                <div className=' grow rounded-xl bg-slate-50 md:mx-6'>
                    <Outlet />
                </div>
            </div>
        </div>
    )

    return (
        <div className='min-h-screen flex font-Asap'>
            <div className='shrink-0 border-2 w-60'>
                <DashboardSideNav />
            </div>
            <div className='grow flex flex-col'>
                <div className='border-2 h-16'>
                    <DashboardTopNav />
                </div>
                <div className='border-2 grow'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout