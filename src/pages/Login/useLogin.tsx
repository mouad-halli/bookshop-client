import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/api/authentication"
import { userContext } from "../../Contexts/userContext"
import { isAxiosError } from "axios"
import { FieldValues, useForm } from "react-hook-form"
import { TLoginFormSchema, loginFormSchema } from "../../schema/authentication"
import { zodResolver } from "@hookform/resolvers/zod"

const useLogin = () => {

    const navigate = useNavigate()
    const { handleUpdateUser } = useContext(userContext)

    const {
        register, handleSubmit, setError, reset,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm<TLoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = async (data: FieldValues) => {
        try {
            const user = await login({email: data.email, password: data.password})
            handleUpdateUser(user)
            navigate('/')
            reset()
        } catch (error: unknown) {
            if (isAxiosError(error) && error.response) {
                const errorMsg = error.response.data.message
                console.log(errorMsg)
                const [, field] = errorMsg.split('"')
                if (field)
                    setError(field, {message: errorMsg})
                else 
                   setError("root", {message: errorMsg})
            }
            else
                console.log(error)
            reset({} ,{keepErrors: true})
        }
    }

    return {
        register, handleSubmit, onSubmit, errors, isSubmitting, navigate, isDirty, isValid
    }
}

export default useLogin