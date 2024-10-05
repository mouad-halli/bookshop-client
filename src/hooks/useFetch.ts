import { useEffect, useState } from "react"
import $api from "../services/api/API"

export const useFetch = <T,>(url: string, initialState: T) => {

    const [data, setData] = useState<T>(initialState)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const fetchedData = (await $api.get<T>(url)).data
            setData(fetchedData)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setError('failed to fetch data')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {
        data, error, isLoading
    }
}
