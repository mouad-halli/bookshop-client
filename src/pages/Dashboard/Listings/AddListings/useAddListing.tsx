import { FieldValues, useForm } from "react-hook-form"
import { TBookSchema, bookSchema } from "../../../../schema/book"
import { zodResolver } from "@hookform/resolvers/zod"
import { createBook } from "../../../../services/api/book"
import { BookType } from "../../../../@Types/book"
import { useState } from "react"

type addItemType = (item: BookType) => void

const useAddListing = (addItem: addItemType) => {

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
            // const formData = new FormData()
            const {image, ...bookData} = data
            // for (const key in data)
            //     formData.append(key, data[key])

            // for (var pair of formData.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1]); 
            // }

            const book = await createBook(bookData)
            addItem(book)
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