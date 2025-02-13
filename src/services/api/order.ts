import $api from "./API";

export const checkout = async () => {
    return (await $api.post('/order/checkout')).data
}

export const getSellerOrders = async () => {
    return (await $api.post('/order/seller')).data
}

export const getCustomerOrders = async () => {
    return (await $api.post('/order/customer')).data
}