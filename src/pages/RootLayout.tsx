import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Toaster />
            <Footer />
        </>
    )
}

export default RootLayout