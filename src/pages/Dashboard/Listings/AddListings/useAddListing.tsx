import { FieldValues, useForm } from "react-hook-form"
import { TBookSchema, bookSchema } from "../../../../schema/book"
import { zodResolver } from "@hookform/resolvers/zod"
import { createBook, updateBook } from "../../../../services/api/book"
import { BookType } from "../../../../@Types/book"
import { useState } from "react"
import $api from "../../../../services/api/API"

type addItemType = (item: BookType) => void
type updateItemType = (updatedItem: BookType) => void
type formType = 'create' | 'update'

const useAddListing = (
    addItem: addItemType | undefined,
    updateItem: updateItemType | undefined,
    formType: formType,
    listingId: string | undefined
    ) => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    const {
        register, handleSubmit, setError, reset,
        formState: { errors, isSubmitting, isValid }
    } = useForm<TBookSchema>({
        resolver: zodResolver(bookSchema),
        mode: "onChange"
    })

    const onSubmit = async (data: FieldValues) => {
        try {
            const formData = new FormData()
            // const {image, ...bookData} = data
            for (const key in data) {
                if (key === 'image') {
                    formData.append(key, data.image[0])
                } else
                    formData.append(key, data[key])
            }

            // for (var pair of formData.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1]); 
            // }

            if (formType === 'create' && addItem) {
                const book = await createBook(formData)
                addItem(book)

            } else if (formType === 'update' && updateItem && listingId) {
                // const updatedBook = await updateBook(bookData, listingId)
                // updateItem(updatedBook)
            }
        
            reset()

        } catch (error) {
            console.log(error)
        }
    }

    return {
        register, handleSubmit, onSubmit, errors, isDisabled: !isValid || isSubmitting, reset,
        isModalVisible, setIsModalVisible
    }
}

export default useAddListing