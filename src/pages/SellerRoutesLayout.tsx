import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../Contexts/userContext"


const SellerRoutesLayout = () => {

    const { user } = useContext(userContext)

    if ( user === undefined)
        return null // I should change this with a Loading Screen

    return (user !== null && user.isSeller) ? <Outlet /> : <Navigate to={'/login'} />

}

export default SellerRoutesLayout