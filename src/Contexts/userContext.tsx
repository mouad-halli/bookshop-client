import { FC, ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { userType } from "../@Types/user";
// import { sleep } from "../utils/helpers";
import { getUser } from "../services/api/user";

type userContextType = {
    // user: userType | null | undefined
    handleUpdateUser: (newUserData: userType) => void
    handleLogout: () => void
    toggleUserSellerStatus: (isSeller: boolean) => void
    getUserFromContext: () => userType | null | undefined
}

export const userContext = createContext<userContextType>({} as userContextType)

type userProviderProps = { children: ReactNode }

export const UserContextProvider: FC<userProviderProps> = ({ children }) => {

    const [user, setUser] = useState<userType | null | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    // const handleUpdateUser = (newUserData: userType) => {
    //     if (newUserData.imgUrl)
    //         newUserData.imgUrl += '?' + new Date().getTime()
    //     setUser({...newUserData})
    // }

    const handleUpdateUser = (newUserData: userType) => {
        const updatedUser = { ...newUserData }
        if (updatedUser.imgUrl)
            updatedUser.imgUrl += '?' + new Date().getTime()
        setUser(updatedUser)
    }

    const toggleUserSellerStatus = (isSeller: boolean) => {
        if (user) {
            const updatedUser = { ...user, isSeller }
            setUser(updatedUser)
        }
    }


    const handleLogout = () => {
        setUser(null)
    }

    const getUserFromContext = () => {
        return user
    }

    const value = useMemo(() => ({
        getUserFromContext,
        handleUpdateUser,
        handleLogout,
        toggleUserSellerStatus
    }), [user])

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