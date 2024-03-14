export interface userType {
    firstname: string
    lastname: string
    email: string
    imgUrl?: string | null
    isSeller: boolean
}

// export interface updateUserType extends Partial<Omit<userType, 'imgUrl'> & {password: string}> {}
// export interface userDto extends userType { _id: string }