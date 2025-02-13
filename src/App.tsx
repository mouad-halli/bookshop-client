import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotAuthenticatedRoutesLayout from './pages/NotAutenticatedRoutesLayout'
import Product from './pages/Product/Product'
import Settings from './pages/Settings/Settings'
import AuthenticatedRoutesLayout from './pages/AuthenticatedRoutesLayout'
import DashboardLayout from './pages/DashboardLayout'
import Listings from './pages/Dashboard/Listings/Listings'
import Orders from './pages/Dashboard/Orders/Orders'
import Dashboard from './pages/Dashboard/Dashboard'
import SellerRoutesLayout from './pages/SellerRoutesLayout'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path='search' element={<Search />} />
                    <Route path='product/:productId' element={<Product />} />
                    <Route element={<NotAuthenticatedRoutesLayout />}>
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route>
                    <Route element={<AuthenticatedRoutesLayout />}>
                        <Route path='settings' element={<Settings />} />
                    </Route>
                    <Route path='*' element={<h1>not found</h1>} />
                </Route>
                <Route element={<SellerRoutesLayout />}>
                    <Route path='/Dashboard' element={<DashboardLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path='listings' element={<Listings />} />
                        <Route path='orders' element={<Orders />} />
                        <Route path='*' element={<h1>not found</h1>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
