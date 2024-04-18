import { BookType } from '../../@Types/book';
import $api from './API';

export const createBook = async (bookData: any): Promise<BookType> => {

    const response = await ($api.post('/book', bookData))

    return response.data
}

export const updateBook = async (bookData: any, listingId: string): Promise<BookType> => {

    const response = await ($api.put(`/book/${listingId}`, bookData))

    return response.data
}

export const getListings = async (): Promise<BookType[]> => {

    const response = await $api.get('user/my-listings')

    return response.data
}

export const deleteBook = async (book_id: string) => {
    return await $api.delete(`/book/${book_id}`)
}