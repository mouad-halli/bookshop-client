import { FieldValues, useForm } from "react-hook-form"
import { TBookSchema, bookSchema } from "../../../../schema/book"
import { zodResolver } from "@hookform/resolvers/zod"

const useAddListing = () => {

    const {
        register, handleSubmit, setError, reset,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm<TBookSchema>({
        resolver: zodResolver(bookSchema)
    })

    const onSubmit = (data: FieldValues) => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    return {
        register, handleSubmit, errors, isSubmitting, isDirty, isValid
    }
}

export default useAddListing