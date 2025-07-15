import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../Contexts/userContext"


const NotAuthenticatedRoutesLayout = () => {

    const {getUserFromContext} = useContext(userContext)

    if (getUserFromContext() === undefined)
        return null // will be updated with a Loading Screen

    return getUserFromContext() === null ? <Outlet /> : <Navigate to={'/'} />

}

export default NotAuthenticatedRoutesLayout