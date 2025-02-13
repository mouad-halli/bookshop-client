import { BookType } from "./book"
import { OrderType } from "./order"
import { userType } from "./user"

export interface OrderItemType {
    _id: string
    order: OrderType
    seller: userType
    product: BookType
    name: string
    quantity: number
    unitPrice: number
    status: string
    createdAt: Date
    updateAt: Date
}