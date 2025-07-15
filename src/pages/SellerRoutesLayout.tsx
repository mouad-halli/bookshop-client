import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../Contexts/userContext"


const SellerRoutesLayout = () => {

    const { getUserFromContext } = useContext(userContext)

    if ( getUserFromContext() === undefined)
        return null // I should change this with a Loading Screen

    return (getUserFromContext() !== null && getUserFromContext()?.isSeller) ? <Outlet /> : <Navigate to={'/login'} />

}

export default SellerRoutesLayout