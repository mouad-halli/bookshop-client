import { userType } from "./user"

export interface BookType {
    _id: string
    title: string
    author: string
    description: string
    price: number
    year: number
    genre: string
    language: string
    seller?: userType
    image: string
}