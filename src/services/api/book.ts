import { BookType } from '../../@Types/book';
import $api from './API';

export const createBook = async (bookData: FormData): Promise<BookType> => {

    const response = await ($api.post('/book', bookData, { headers: { 'Content-Type': "multipart/form-data" } }))

    return response.data
}

export const updateBook = async (bookData: FormData, listingId: string): Promise<BookType> => {

    const response = await ($api.put(`/book/${listingId}`, bookData, { headers: { 'Content-Type': "multipart/form-data" } }))

    return response.data
}

export const getListings = async (): Promise<BookType[]> => {

    const response = await $api.get('user/my-listings')

    return response.data
}

export const deleteBook = async (book_id: string) => {
    return await $api.delete(`/book/${book_id}`)
}

export const getBookById = async (book_id: string): Promise<BookType> => {
    const response = await $api.get(`/book/${book_id}`)

    return response.data
}