import { BookType } from '../../@Types/book';
import $api from './API';

export const createBook = async (bookData: FormData) => {

    return await ($api.post('book', bookData))
}

export const getListings = async (): Promise<BookType[]> => {

    return await ($api.get('user/my-listings'))
}