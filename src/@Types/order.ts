import { userType } from "./user"

export interface OrderType {
    _id: string
    customer: userType
    // seller: userType
    items: OrderType[]
    status: string,
    totalAmount: number
    createdAt: Date
    updateAt: Date
}