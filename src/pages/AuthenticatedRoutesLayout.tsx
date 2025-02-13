import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContext } from "../Contexts/userContext"


const AuthenticatedRoutesLayout = () => {

    const { user } = useContext(userContext)

    if ( user === undefined)
        return null // I should change this with a Loading Screen

    return user !== null ? <Outlet /> : <Navigate to={'/'} />

}

export default AuthenticatedRoutesLayout