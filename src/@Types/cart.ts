import { BookType } from './book';
// export interface cartItemType extends Pick<BookType, "_id" | "image" | "title" | "author" | "price"> {
//     quantity: number
// }
export interface cartItemType {
    product: BookType
    quantity: number
}

// export type cartItemType = { quantity: number } & Pick<BookType, "_id" | "image" | "title" | "author" | "price">