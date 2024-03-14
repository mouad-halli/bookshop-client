import { userType } from "../../@Types/user"
import $api from "./API"

export const getUser = async () : Promise<userType> => {
    return (await $api.get('user/me')).data
}

export const updateUserInformation = async (data: any) => {
    return (await $api.put('user/information', data)).data
}

export const updateUserPassword = async (data: any) => {
    return (await $api.put('user/password', data)).data
}

export const uploadUserImg = async (image: File) => {
    const form = new FormData()

    form.append('image', image)
    return (await $api.put('/user/upload/image', form, { headers: { 'Content-Type': "multipart/form-data" } })).data
}
