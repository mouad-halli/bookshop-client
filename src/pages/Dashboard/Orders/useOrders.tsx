import { useFetch } from "@/hooks/useFetch"

const useOrders = () => {
    const {
        isLoading,
        data,
        error
    } = useFetch(
        "/order/seller",
        []
    )

    return {
        isLoading,
        data,
        error
    }
}

export default useOrders