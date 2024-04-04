import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { userType } from "../@Types/user";
// import { sleep } from "../utils/helpers";
import { getUser } from "../services/api/user";

type userContextType = {
    user: userType | null | undefined
    handleUpdateUser: (newUserData: userType) => void
    handleLogout: () => void
}

export const userContext = createContext<userContextType>({} as userContextType)

type userProviderProps = { children: ReactNode }

export const UserContextProvider = ( {children}:userProviderProps ) => {

    const [user, setUser] = useState<userType | null | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleUpdateUser = (newUserData: userType) => {
        if (newUserData.imgUrl)
            newUserData.imgUrl += '?' + new Date().getTime()
        setUser({...newUserData})
    }

    const handleLogout = () => {
        setUser(null)
    }

    const value = useMemo(() => ({user, handleUpdateUser, handleLogout}), [user])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setIsLoading(true)
                const user = await getUser()
                setUser(user)
                setIsLoading(false)
            } catch (error) {
                setUser(null)
                setIsLoading(false)
            }
        }
        fetchUserData()
    }, [])

    return (
        <userContext.Provider value={value}>
            {!isLoading && children}
        </userContext.Provider>
    )

}