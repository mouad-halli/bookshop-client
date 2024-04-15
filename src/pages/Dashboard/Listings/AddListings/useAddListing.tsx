import { FieldValues, useForm } from "react-hook-form"
import { TBookSchema, bookSchema } from "../../../../schema/book"
import { zodResolver } from "@hookform/resolvers/zod"
import { createBook } from "../../../../services/api/book"

const useAddListing = () => {

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

            for (const key in data)
                formData.append(key, data[key])

            // for (var pair of formData.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1]); 
            // }

            await createBook(formData)
            
        } catch (error) {
            console.log(error)
        }
    }

    return {
        register, handleSubmit, onSubmit, errors, isDisabled: !isValid || isSubmitting
    }
}

export default useAddListing