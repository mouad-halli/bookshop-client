import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout