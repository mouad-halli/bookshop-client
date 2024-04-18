import { Outlet } from 'react-router-dom'
import DashboardSideNav from '../components/DashboardNav/DashboardSideNav'
import DashboardTopNav from '../components/DashboardNav/DashboardTopNav'
import DashboardFixedSideNav from '../components/DashboardNav/DashboardFixedSideNav'

const DashboardLayout = () => {

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