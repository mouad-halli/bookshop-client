import axios, { AxiosError, AxiosResponse } from 'axios'
import { refreshAccessToken } from './authentication'

const $api = axios.create({
    baseURL: import.meta.env.VITE_BACK_END_URL,
    withCredentials: true
})

let queue: any[] = []
let isRefrechingAccessToken = false

const processQueue = (error: any) => {
    queue.forEach(promise => {
        if (error)
            promise.reject(error)
        else
            promise.resolve()
    })

    queue = []
}

const interceptAccessTokenExpiredErrors = (error: AxiosError) => {

    if (isRefrechingAccessToken)
        return(
            new Promise((resolve, reject) => queue.push({resolve, reject}))
            .then(() => error.config && $api(error.config))
            .catch(() => Promise.reject(error))
        )
    
    return new Promise((resolve, reject) => {
        isRefrechingAccessToken = true
        refreshAccessToken()
        .then(() => {
            processQueue(null)
            resolve(error.config && $api(error.config))
        })
        .catch((err) => {
            processQueue(err)
            reject(err)
        })
        .finally(() => isRefrechingAccessToken = false)
        
    })
}

const onResponseError = async (error: AxiosError) => {
    if (error.response?.status === 401)
        return interceptAccessTokenExpiredErrors(error)
    return Promise.reject(error)
}

const onResponse = (response: AxiosResponse) => response

$api.interceptors.response.use(onResponse, onResponseError)

export default $api
