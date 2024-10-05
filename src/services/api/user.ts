import { userType, userAddress } from "../../@Types/user"
import $api from "./API"

export const getUser = async () : Promise<userType> => {
    return (await $api.get('user/me')).data
}

export const getUserAddress = async () : Promise<userAddress> => {
    return (await $api.get('user/address')).data
}

export const updateUserInformation = async (data: any) => {
    return (await $api.put('user/information', data)).data
}

export const updateUserPassword = async (data: any) => {
    return (await $api.put('user/password', data)).data
}

export const upsertUserAddress = async (data: any) => {
    return (await $api.put('user/address', data)).data
}

export const uploadUserImg = async (image: File) => {
    const form = new FormData()

    form.append('image', image)
    return (await $api.put('/user/upload/image', form, { headers: { 'Content-Type': "multipart/form-data" } })).data
}

export const updateUserSellerStatus = async (isSeller: boolean) => {
    return await $api.put('user/is-seller', { isSeller })
}

export const getSellers = async (sellersLimit: number, booksLimit: number): Promise<userType[]> => {
    return (await $api.get(`user/sellers?sellers_limit=${sellersLimit}&books_limit=${booksLimit}`)).data
}