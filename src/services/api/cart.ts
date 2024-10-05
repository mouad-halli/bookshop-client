import { cartItemType } from "../../@Types/cart"
import $api from "./API"

export const getCart = async (): Promise<cartItemType[]> => {
    return (await $api.get('/cart')).data
}

export const upsertItemToCart = async (itemId: string, quantity: number) => {
    return (await $api.put(`/cart/cart-item?book_id=${itemId}&quantity=${quantity}`))
}