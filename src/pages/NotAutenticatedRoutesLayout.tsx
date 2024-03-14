import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../Contexts/userContext"


const NotAuthenticatedRoutesLayout = () => {

    const {user} = useContext(userContext)

    if (user === undefined)
        return null // will be updated with a Loading Screen

    return user === null ? <Outlet /> : <Navigate to={'/'} />

}

export default NotAuthenticatedRoutesLayout