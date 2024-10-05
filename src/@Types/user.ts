import { BookType } from "./book"

export interface userType {
    _id: string
    firstname: string
    lastname: string
    email: string
    imgUrl?: string | null
    isSeller: boolean
    books?: BookType[]
}

export interface userAddress {
    address1: string,
    address2: string,
    country: string,
    city: string,
    zipCode: string
}


// export interface updateUserType extends Partial<Omit<userType, 'imgUrl'> & {password: string}> {}
// export interface userDto extends userType { _id: string }